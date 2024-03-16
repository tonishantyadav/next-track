import {
  Table,
  TableCaption,
  TableHeader,
  TableRow,
  TableHead,
  TableBody,
  TableCell,
} from '@/components/ui/table'
import { Issue } from '@prisma/client'
import React from 'react'

interface Props {
  issues: Issue[]
}

const IssuesTable = ({ issues }: Props) => {
  return (
    <div className="border rounded-lg my-5">
      <Table className="w-full">
        <TableCaption>A list of recent issues.</TableCaption>
        <TableHeader>
          <TableRow className="flex">
            <TableHead className="flex-1 text-lg">Title</TableHead>
            <TableHead className="flex-1 text-lg">Status</TableHead>
            <TableHead className="flex-1 text-lg">Created</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {issues.map((issue, index) => (
            <TableRow key={index} className="flex">
              <TableCell className="flex-1 ">{issue.title}</TableCell>
              <TableCell className="flex-1">{issue.status}</TableCell>
              <TableCell className="flex-1">
                {issue.created_at.toDateString()}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  )
}

export default IssuesTable
