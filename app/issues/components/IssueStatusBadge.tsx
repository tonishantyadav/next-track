import { Badge } from '@/components/ui/badge'

const IssueStatusBadge = ({
  status,
}: {
  status: 'OPEN' | 'IN_PROGRESS' | 'CLOSED'
}) => {
  return (
    <>
      {status === 'OPEN' && <Badge variant="green">Open</Badge>}
      {status === 'IN_PROGRESS' && <Badge variant="orange">In Progress</Badge>}
      {status === 'CLOSED' && <Badge variant="red">Closed</Badge>}
    </>
  )
}

export default IssueStatusBadge
