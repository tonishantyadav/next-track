'use client'

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'
import { Status } from '@prisma/client'
import { useRouter } from 'next/navigation'

const statuses: { label: string; value?: Status }[] = [
  { label: 'All' },
  { label: 'Open', value: 'OPEN' },
  { label: 'In Progress', value: 'IN_PROGRESS' },
  { label: 'Closed', value: 'CLOSED' },
]

const IssueStatusFilter = () => {
  const router = useRouter()
  return (
    <Select
      onValueChange={(status) => {
        const query = status !== 'all' ? `?status=${status}` : ''
        router.push(`/issues/${query}`)
      }}
    >
      <SelectTrigger className="w-[180px]">
        <SelectValue placeholder="Filter by" />
      </SelectTrigger>
      <SelectContent>
        {statuses.map((status, index) => (
          <SelectItem value={status.value || 'all'} key={index}>
            {status.label}
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  )
}

export default IssueStatusFilter
