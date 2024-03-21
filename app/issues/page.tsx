import {
  IssueAddButton,
  IssueStatusFilter,
  IssuesTable,
} from '@/app/issues/_components'
import prisma from '@/prisma/client'
import { Status } from '@prisma/client'
import { getServerSession } from 'next-auth'
import authOptions from '../auth/auth-options'

interface Props {
  searchParams: {
    status: Status
  }
}

const IssuesPage = async ({ searchParams }: Props) => {
  const statuses = Object.values(Status)
  const status = statuses.includes(searchParams.status)
    ? searchParams.status
    : undefined

  const session = await getServerSession(authOptions)

  const issues = await prisma.issue.findMany({
    where: {
      status,
    },
  })

  return (
    <div>
      {session && (
        <div className="flex justify-end gap-3">
          <IssueStatusFilter />
          <IssueAddButton />
        </div>
      )}
      <IssuesTable issues={issues} />
    </div>
  )
}

export const dynamic = 'force-dynamic'

export default IssuesPage
