import { Card } from '@/components/ui/card'
import { Status } from '@prisma/client'
import Link from 'next/link'

export interface IssueCount {
  label: string
  value: number
  status: Status
}

export interface CountByStatus {
  open: number
  inProgress: number
  closed: number
}

const IssueCountCard = ({
  countByStatus,
}: {
  countByStatus: CountByStatus
}) => {
  const issues: IssueCount[] = [
    { label: 'Open Issues', value: countByStatus.open, status: 'OPEN' },
    {
      label: 'In-progress Issues',
      value: countByStatus.inProgress,
      status: 'IN_PROGRESS',
    },
    { label: 'Closed Issues', value: countByStatus.closed, status: 'CLOSED' },
  ]

  return (
    <div className="flex gap-2">
      {issues.map((issue, index) => (
        <Card key={index}>
          <Link
            href={`/issues?status=${issue.status}`}
            className="flex items-center justify-between gap-2 p-5"
          >
            <p className="text-md font-medium hover:text-gray-500 md:text-lg lg:text-2xl">
              {issue.label}
            </p>
            <p className="text-sm text-slate-400 md:text-xl lg:text-4xl">
              {issue.value}
            </p>
          </Link>
        </Card>
      ))}
    </div>
  )
}

export default IssueCountCard
