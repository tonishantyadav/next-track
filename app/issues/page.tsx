import { AddIssueButton, IssuesTable } from '@/app/issues/_components'
import prisma from '@/prisma/client'

const IssuesPage = async () => {
  const issues = await prisma.issue.findMany()

  return (
    <div>
      <AddIssueButton />
      <IssuesTable issues={issues} />
    </div>
  )
}

export default IssuesPage
