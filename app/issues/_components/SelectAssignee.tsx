'use client'

import { Skeleton } from '@/components/ui'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'
import { User } from '@prisma/client'
import { useQuery } from '@tanstack/react-query'
import axios from 'axios'

const SelectAssignee = () => {
  const {
    data: users,
    isLoading,
    isError,
  } = useQuery<User[]>({
    queryKey: ['users'],
    queryFn: () => axios.get('/api/users').then((res) => res.data),
    staleTime: 60 * 1000, // 60 sec
    retry: 3,
  })

  if (isLoading) return <Skeleton className="mt-3 h-8 w-full rounded-full" />

  if (isError) return null

  return (
    <div className="mt-2">
      <Select>
        <SelectTrigger className="w-[180px] rounded-full">
          <SelectValue placeholder="Assign to" />
        </SelectTrigger>
        <SelectContent className="mt-3">
          {users?.map((user) => (
            <SelectItem value={user.id} key={user.id}>
              {user.name}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
    </div>
  )
}

export default SelectAssignee
