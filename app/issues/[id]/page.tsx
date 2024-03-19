import {
  IssueDeleteButton,
  IssueEditButton,
  IssuePreview,
} from '@/app/issues/_components'
import prisma from '@/prisma/client'
import { notFound } from 'next/navigation'
import delay from 'delay'

interface Props {
  params: {
    id: string
  }
}

const IssueDetailPage = async ({ params }: Props) => {
  const issue = await prisma.issue.findUnique({
    where: { id: parseInt(params.id) },
  })

  await delay(20000)

  if (!issue) notFound()

  return (
    <div className="m-auto grid gap-1 md:grid-cols-3 lg:grid-cols-3">
      <div className="p-1 md:col-span-2 lg:col-span-2">
        <IssuePreview issue={issue} />
      </div>
      <div className="flex flex-col gap-2 sm:flex-row sm:justify-end md:justify-center lg:justify-center">
        <IssueEditButton issueId={issue.id} />
        <IssueDeleteButton issueId={issue.id} />
      </div>
    </div>
  )
}

export default IssueDetailPage
