import { Skeleton } from '@/app/components/ui'
import React from 'react'

const IssueSkeletonLoading = () => {
  return (
    <div className="flex flex-col space-y-8">
      <div className="flex flex-col space-y-3">
        <Skeleton className="h-4 w-[100px] rounded-lg" />
        <Skeleton className="h-8 max-w-lg rounded-lg" />
      </div>
      <div className="flex flex-col space-y-3">
        <Skeleton className="h-4 w-[100px] rounded-lg" />
        <div>
          <Skeleton className="h-svh max-w-full rounded-lg" />
        </div>
      </div>
      <div className="flex justify-end">
        <Skeleton className="h-[20px] w-[80px] rounded-full" />
      </div>
    </div>
  )
}

export default IssueSkeletonLoading
