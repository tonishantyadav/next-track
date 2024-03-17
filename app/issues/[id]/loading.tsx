import { Skeleton } from '@/components/ui'

const IssueDetailPageLoading = () => {
  return (
    <div className="flex flex-col space-y-3">
      <Skeleton className="h-4 max-w-xs rounded-lg" />
      <div className="flex gap-2">
        <Skeleton className="h-4 w-[50px] rounded-full" />
        <Skeleton className="h-4 w-[200px] rounded-lg" />
      </div>
      <Skeleton className="h-[500px] max-w-md rounded-lg" />
    </div>
  )
}

export default IssueDetailPageLoading
