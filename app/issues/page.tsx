import { Button } from '@/components/ui/button'
import prisma from '@/prisma/client'
import Link from 'next/link'
import IssuesTable from './components/IssuesTable'

const page = async () => {
  const issues = await prisma.issue.findMany()
  return (
    <div>
      <div className="flex justify-end">
        <Button>
          <Link href="/issues/new">Add issue</Link>
        </Button>
      </div>
      <IssuesTable issues={issues} />
    </div>
  )
}

export default page
