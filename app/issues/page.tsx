import { IssueAddButton, IssuesTable } from '@/app/issues/_components'
import prisma from '@/prisma/client'
import { getServerSession } from 'next-auth'
import authOptions from '../auth/auth-options'

const IssuesPage = async () => {
  const session = await getServerSession(authOptions)

  const issues = await prisma.issue.findMany()

  return (
    <div>
      {session && <IssueAddButton />}
      <IssuesTable issues={issues} />
    </div>
  )
}

export const dynamic = 'force-dynamic'

export default IssuesPage
