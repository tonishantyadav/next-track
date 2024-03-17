import { IssueStatusBadge } from '@/app/issues/_components'
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui'
import { Issue } from '@prisma/client'
import Link from 'next/link'

interface Props {
  issues: Issue[]
}

const IssuesTable = ({ issues }: Props) => {
  return (
    <div className="my-5 rounded-lg border">
      <Table className="mb-2 w-full">
        <TableCaption>A list of recent issues.</TableCaption>
        <TableHeader>
          <TableRow className="flex">
            <TableHead className="flex-1 text-lg">Title</TableHead>
            <TableHead className="flex-1 text-lg">Status</TableHead>
            <TableHead className="flex-1 text-lg">Created</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {issues.map((issue, index) => (
            <TableRow className="flex" key={index}>
              <TableCell className="flex-1">
                <Link
                  className="hover:text-slate-400"
                  href={`issues/${issue.id}`}
                >
                  {issue.title}
                </Link>
              </TableCell>
              <TableCell className="flex-1">
                <IssueStatusBadge status={issue.status} />
              </TableCell>
              <TableCell className="flex-1">
                {issue.created_at.toDateString()}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  )
}

export { IssuesTable }
