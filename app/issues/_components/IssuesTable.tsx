import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/app/components/ui/table'
import { IssueStatusBadge } from '@/app/issues/_components'
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
      <Table>
        <TableHeader>
          <TableRow className="flex justify-center">
            {columns.map((column) => (
              <TableHead
                className={`flex-1 text-lg ${column.className}`}
                key={column.value}
              >
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
              <TableCell className="invisible flex-1 md:visible lg:visible">
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
  className?: string
}[] = [
  { label: 'Title', value: 'title' },
  { label: 'Status', value: 'status' },
  {
    label: 'Created',
    value: 'created_at',
    className: 'invisible md:visible lg:visible',
  },
]

export const columnNames = columns.map((column) => column.value)

export default IssuesTable
