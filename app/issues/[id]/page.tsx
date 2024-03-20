import authOptions from '@/app/auth/auth-options'
import {
  IssueDeleteButton,
  IssueEditButton,
  IssuePreview,
} from '@/app/issues/_components'
import prisma from '@/prisma/client'
import { getServerSession } from 'next-auth'
import { notFound } from 'next/navigation'

interface Props {
  params: {
    id: string
  }
}

const IssueDetailPage = async ({ params }: Props) => {
  const session = await getServerSession(authOptions)

  const issue = await prisma.issue.findUnique({
    where: { id: parseInt(params.id) },
  })

  if (!issue) notFound()

  return (
    <div className="m-auto grid gap-1 md:grid-cols-3 lg:grid-cols-3">
      <div className="p-1 md:col-span-2 lg:col-span-2">
        <IssuePreview issue={issue} />
      </div>
      {session && (
        <div className="flex flex-col gap-2 sm:flex-row sm:justify-end md:justify-center lg:justify-center">
          <IssueEditButton issueId={issue.id} />
          <IssueDeleteButton issueId={issue.id} />
        </div>
      )}
    </div>
  )
}

export default IssueDetailPage
