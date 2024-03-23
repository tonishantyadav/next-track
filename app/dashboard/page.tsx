import prisma from '@/prisma/client'
import { IssueSummary, LatestIssuesTable } from './_components'

const DashboardPage = async () => {
  const issues = await prisma.issue.findMany()

  const open = issues.filter((issue) => issue.status === 'OPEN').length
  const closed = issues.filter((issue) => issue.status === 'CLOSED').length
  const inProgress = issues.filter(
    (issue) => issue.status === 'IN_PROGRESS'
  ).length

  return (
    <div className="grid gap-2 md:grid-cols-2 lg:grid-cols-2">
      <div>
        <IssueSummary open={open} inProgress={inProgress} closed={closed} />
      </div>
      <div>
        <LatestIssuesTable />
      </div>
    </div>
  )
}

export default DashboardPage
