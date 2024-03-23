import { Avatar, AvatarFallback, AvatarImage } from '@/app/components/ui/avatar'
import {
  Table,
  TableBody,
  TableCell,
  TableRow,
} from '@/app/components/ui/table'
import { IssueStatusBadge } from '@/app/issues/_components'
import { Card, CardContent, CardHeader } from '@/components/ui/card'
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
    <Card>
      <CardHeader>
        <h1 className="pl-5 text-3xl">Latest Issues</h1>
      </CardHeader>
      <CardContent>
        <Table>
          <TableBody>
            {latestIssues.map((issue) => (
              <TableRow key={issue.id}>
                <TableCell>
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
                        <Link href={`issues/${issue.id}`}>
                          <p className="cursor-pointer text-lg font-medium hover:text-slate-400">
                            {issue.title}
                          </p>
                        </Link>
                      </div>
                      <div>
                        <IssueStatusBadge status={issue.status} />
                      </div>
                    </div>
                  </div>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  )
}

export default LatestIssuesTable
