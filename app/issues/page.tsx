import {
  IssueAddButton,
  IssueStatusFilter,
  IssuesTable,
} from '@/app/issues/_components'
import prisma from '@/prisma/client'
import { Status } from '@prisma/client'
import { getServerSession } from 'next-auth'
import authOptions from '../auth/auth-options'
import { IssueQuery, columnNames } from './_components/IssuesTable'

interface Props {
  searchParams: IssueQuery
}

const IssuesPage = async ({ searchParams }: Props) => {
  const session = await getServerSession(authOptions)

  const statuses = Object.values(Status)
  const status = statuses.includes(searchParams.status)
    ? searchParams.status
    : undefined

  const where = { status }
  const orderBy = columnNames.includes(searchParams.orderBy)
    ? { [searchParams.orderBy]: searchParams.sort }
    : undefined

  const issues = await prisma.issue.findMany({
    where,
    orderBy,
  })

  return (
    <div>
      {session && (
        <div className="flex justify-end gap-3">
          <IssueStatusFilter />
          <IssueAddButton />
        </div>
      )}
      <IssuesTable issues={issues} searchParams={searchParams} />
    </div>
  )
}

export const dynamic = 'force-dynamic'

export default IssuesPage
