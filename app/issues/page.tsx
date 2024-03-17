import prisma from '@/prisma/client'
import { AddIssueButton } from './components/IssueAction'
import IssuesTable from './components/IssuesTable'
import delay from 'delay'

const page = async () => {
  const issues = await prisma.issue.findMany()
  await delay(2000)

  return (
    <div>
      <AddIssueButton />
      <IssuesTable issues={issues} />
    </div>
  )
}

export default page
