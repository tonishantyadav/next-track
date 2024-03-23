import { IssueStatusBadge } from '@/app/issues/_components'
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/app/components/ui'
import { Issue, Status } from '@prisma/client'
import { ArrowDownIcon, ArrowUpIcon } from '@radix-ui/react-icons'
import Link from 'next/link'

export interface IssueQuery {
  status: Status
  orderBy: keyof Issue
  sort: 'asc' | 'desc'
}

interface Props {
  issues: Issue[]
  searchParams: IssueQuery
}

const IssuesTable = ({ issues, searchParams }: Props) => {
  return (
    <div className="my-5 rounded-lg border">
      <Table className="w-full">
        <TableHeader>
          <TableRow className="flex">
            {columns.map((column) => (
              <TableHead className="flex-1 text-lg" key={column.value}>
                <Link
                  href={{
                    query: {
                      ...searchParams,
                      orderBy: column.value,
                      sort:
                        column.value === searchParams.orderBy
                          ? searchParams.sort === 'asc'
                            ? 'desc'
                            : 'asc'
                          : 'asc',
                    },
                  }}
                >
                  {column.label}
                </Link>
                {column.value === searchParams.orderBy &&
                  (searchParams.sort === 'asc' ? (
                    <ArrowUpIcon className="inline" />
                  ) : (
                    <ArrowDownIcon className="inline" />
                  ))}
              </TableHead>
            ))}
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

const columns: {
  label: string
  value: keyof Issue
}[] = [
  { label: 'Title', value: 'title' },
  { label: 'Status', value: 'status' },
  { label: 'Created', value: 'created_at' },
]

export const columnNames = columns.map((column) => column.value)

export default IssuesTable
