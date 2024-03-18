import { IssueSkeletonLoading } from '@/app/issues/_components'
import prisma from '@/prisma/client'
import dynamic from 'next/dynamic'
import { notFound } from 'next/navigation'

interface Props {
  params: {
    id: string
  }
}

const IssueForm = dynamic(() => import('@/app/issues/_components/IssueForm'), {
  ssr: false,
  loading: () => <IssueSkeletonLoading />,
})

const IssueEditPage = async ({ params }: Props) => {
  const issue = await prisma.issue.findUnique({
    where: { id: parseInt(params.id) },
  })

  if (!issue) notFound()

  return (
    <div>
      <IssueForm issue={issue} />
    </div>
  )
}

export default IssueEditPage
