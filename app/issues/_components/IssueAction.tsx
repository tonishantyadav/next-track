import { Button } from '@/components/ui'
import Link from 'next/link'

const IssueAddButton = () => {
  return (
    <div className="flex justify-end">
      <Button>
        <Link href="/issues/new">Add Issue</Link>
      </Button>
    </div>
  )
}

export { IssueAddButton as AddIssueButton }
