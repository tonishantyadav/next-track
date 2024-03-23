import {
  Skeleton,
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/app/components/ui'
import { IssueAddButton } from './_components/IssueAction'

const LoadingIssuePage = () => {
  const issues = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
  return (
    <>
      <IssueAddButton />
      <div className="my-5 rounded-lg border">
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
                <TableCell className="flex-1 ">
                  <Skeleton className="h-3 w-[250px] rounded-full" />
                </TableCell>
                <TableCell className="flex-1">
                  <Skeleton className="h-3 w-[80px] rounded-full" />
                </TableCell>
                <TableCell className="flex-1">
                  <Skeleton className="h-3 w-[150px]" />
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </>
  )
}

export default LoadingIssuePage
