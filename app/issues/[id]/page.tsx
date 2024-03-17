import {
  IssueDeleteButton,
  IssueEditButton,
  IssuePreview,
} from '@/app/issues/_components'
import prisma from '@/prisma/client'
import { notFound } from 'next/navigation'

interface Props {
  params: {
    id: string
  }
}

const IssueDetailPage = async ({ params }: Props) => {
  const issue = await prisma.issue.findUnique({
    where: { id: parseInt(params.id) },
  })

  if (!issue) notFound()

  return (
    <div className="grid gap-1 md:grid-cols-2 lg:grid-cols-2">
      <IssuePreview issue={issue} />
      <div className="flex gap-2">
        <IssueEditButton issueId={issue.id} />
      </div>
    </div>
  )
}

export default IssueDetailPage
