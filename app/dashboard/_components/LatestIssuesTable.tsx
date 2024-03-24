import { IssueStatusBadge } from '@/app/issues/_components'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { Card } from '@/components/ui/card'
import { Table, TableBody, TableCell, TableRow } from '@/components/ui/table'
import prisma from '@/prisma/client'
import Link from 'next/link'
import { FaUser } from 'react-icons/fa6'

const LatestIssuesTable = async () => {
  const latestIssues = await prisma.issue.findMany({
    take: 5,
    orderBy: { created_at: 'desc' },
    include: { assignedToUser: true },
  })

  return (
    <Card className="flex max-w-sm flex-col space-y-5 md:max-w-full lg:max-w-full">
      <h1 className="p-5 text-center text-3xl">Latest Issues</h1>
      <Table className="mb-5 lg:mb-10">
        <TableBody>
          {latestIssues.map((issue) => (
            <TableRow key={issue.id}>
              <TableCell>
                <Link href={`issues/${issue.id}`}>
                  <div className="flex items-center gap-1">
                    <div className="p-1">
                      <Avatar>
                        {issue.assignedToUser?.image && (
                          <AvatarImage
                            src={issue.assignedToUser.image}
                            className="sm"
                          />
                        )}
                        <AvatarFallback>
                          <FaUser />
                        </AvatarFallback>
                      </Avatar>
                    </div>
                    <div className="flex flex-col gap-1 p-1">
                      <div>
                        <p className="cursor-pointer text-lg font-medium hover:text-slate-400">
                          {issue.title}
                        </p>
                      </div>
                      <div>
                        <IssueStatusBadge status={issue.status} />
                      </div>
                    </div>
                  </div>
                </Link>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </Card>
  )
}

export default LatestIssuesTable
