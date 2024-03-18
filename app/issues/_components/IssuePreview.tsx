import { IssueStatusBadge } from '@/app/issues/_components'
import MarkdownPreview from '@/components/MarkdownPreview'
import { Issue } from '@prisma/client'

const IssuePreview = ({ issue }: { issue: Issue }) => {
  return (
    <div className="flex flex-col">
      <h1 className="text-4xl font-semibold">{issue.title}</h1>
      <div className="my-4 flex items-center gap-5">
        <IssueStatusBadge status={issue.status} />
        <p className="text-slate-400">{issue.created_at.toDateString()}</p>
      </div>
      <MarkdownPreview value={issue.description} />
    </div>
  )
}

export default IssuePreview
