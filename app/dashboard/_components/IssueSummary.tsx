import { Card } from '@/components/ui/card'
import { Status } from '@prisma/client'
import Link from 'next/link'
import React from 'react'

type IssueCount = {
  label: string
  value: number
  status: Status
}

const IssueSummary = ({
  open,
  inProgress,
  closed,
}: {
  open: number
  inProgress: number
  closed: number
}) => {
  const issues: IssueCount[] = [
    { label: 'Open Issues', value: open, status: 'OPEN' },
    { label: 'In-progress Issues', value: inProgress, status: 'IN_PROGRESS' },
    { label: 'Closed Issues', value: closed, status: 'CLOSED' },
  ]
  return (
    <div className="flex justify-evenly gap-2">
      {issues.map((container, index) => (
        <IssueCountCard container={container} key={index} />
      ))}
    </div>
  )
}

const IssueCountCard = ({ container }: { container: IssueCount }) => {
  return (
    <Card>
      <Link
        href={`/issues?status=${container.status}`}
        className="flex justify-between gap-2 px-3 py-5"
      >
        <p className="text-md font-medium hover:text-slate-400 md:text-lg lg:text-2xl">
          {container.label}
        </p>
        <p className="text-md text-slate-400 md:text-xl lg:text-4xl">
          {container.value}
        </p>
      </Link>
    </Card>
  )
}

export default IssueSummary
