'use client'

import { Skeleton, toast } from '@/app/components/ui'
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from '@/app/components/ui/select'
import { Issue, User } from '@prisma/client'
import { useQuery } from '@tanstack/react-query'

import axios from 'axios'

const SelectAssignee = ({ issue }: { issue: Issue }) => {
  const { data: users, isLoading, isError } = useUsers()
  const handleAssignIssue = (userId: string) => {
    axios
      .patch(`/api/issues/${issue.id}`, {
        assignedToUserId: userId === 'unassigned' ? null : userId,
      })
      .catch(() => {
        toast({
          variant: 'destructive',
          title: 'Changes could not be saved.',
        })
      })
  }

  if (isLoading) return <Skeleton className="w-md mt-3 h-8 rounded-full" />

  if (isError) return null

  return (
    <div className="mt-2">
      <Select
        defaultValue={issue.assignedToUserId || ''}
        onValueChange={handleAssignIssue}
      >
        <SelectTrigger className="w-[180px]">
          <SelectValue placeholder="Assign to" />
        </SelectTrigger>
        <SelectContent className="mt-3">
          <SelectGroup>
            <SelectLabel>Suggestions</SelectLabel>
            <SelectItem value={'unassigned'}>Unassigned</SelectItem>
            {users?.map((user) => (
              <SelectItem value={user.id} key={user.id}>
                {user.name}
              </SelectItem>
            ))}
          </SelectGroup>
        </SelectContent>
      </Select>
    </div>
  )
}

const useUsers = () =>
  useQuery<User[]>({
    queryKey: ['users'],
    queryFn: () => axios.get('/api/users').then((res) => res.data),
    staleTime: 60 * 1000, //60s
    retry: 3,
  })

export default SelectAssignee
