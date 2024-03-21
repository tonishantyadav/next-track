import authOptions from '@/app/auth/auth-options'
import {
  IssueDeleteButton,
  IssueEditButton,
  IssueStatusBadge,
  SelectAssignee,
} from '@/app/issues/_components'
import MarkdownPreview from '@/components/MarkdownPreview'
import prisma from '@/prisma/client'
import { getServerSession } from 'next-auth'
import { notFound } from 'next/navigation'
import delay from 'delay'

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
    <div className="flex max-w-xl flex-col">
      <div className="flex justify-between">
        <h1 className="text-4xl font-semibold">{issue.title}</h1>
        {session && <SelectAssignee issue={issue} />}
      </div>
      <div className="my-4 flex items-center gap-5">
        <IssueStatusBadge status={issue.status} />
        <p className="text-slate-400">{issue.created_at.toDateString()}</p>
      </div>
      <div>
        <MarkdownPreview value={issue.description} />
      </div>
      {session && (
        <div className="flex justify-end gap-2">
          <IssueDeleteButton issueId={issue.id} />
          <IssueEditButton issueId={issue.id} />
        </div>
      )}
    </div>
  )
}

export default IssueDetailPage
