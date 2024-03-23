import { Badge } from '@/app/components/ui'
import { Status } from '@prisma/client'

type BadgeVariants = 'green' | 'orange' | 'red' | 'default' | 'outline'

const statusMap: Record<Status, { label: string; variant: BadgeVariants }> = {
  OPEN: { label: 'Open', variant: 'green' },
  IN_PROGRESS: { label: 'In Progress', variant: 'orange' },
  CLOSED: { label: 'Closed', variant: 'red' },
}

const IssueStatusBadge = ({ status }: { status: Status }) => {
  const { label, variant } = statusMap[status]
  return <Badge variant={variant}>{label}</Badge>
}

export default IssueStatusBadge
