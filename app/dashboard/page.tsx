import prisma from '@/prisma/client'
import { LatestIssuesTable } from './_components'
import IssueChart from './_components/IssueChart'
import IssueCountCard, { CountByStatus } from './_components/IssueCountCard'
import { Metadata } from 'next'

export const DashboardPage = async () => {
  const issues = await prisma.issue.findMany()

  const open = issues.filter((issue) => issue.status === 'OPEN').length
  const closed = issues.filter((issue) => issue.status === 'CLOSED').length
  const inProgress = issues.filter(
    (issue) => issue.status === 'IN_PROGRESS'
  ).length

  const countByStatus: CountByStatus = { open, closed, inProgress }

  return (
    <div className="grid gap-3 md:grid-cols-2 lg:grid-cols-2">
      <div className="flex flex-col justify-between gap-3">
        <IssueCountCard countByStatus={countByStatus} />
        <IssueChart countByStatus={countByStatus} />
      </div>
      <div>
        <LatestIssuesTable />
      </div>
    </div>
  )
}

export const metadata: Metadata = {
  title: 'Next Track - Dashboard',
  description: 'View a summary of project issues.',
}

export default DashboardPage
