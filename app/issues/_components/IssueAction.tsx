import { Button } from '@/components/ui'
import Link from 'next/link'

const AddIssueButton = () => {
  return (
    <div className="flex justify-end">
      <Button>
        <Link href="/issues/new">Add Issue</Link>
      </Button>
    </div>
  )
}

export { AddIssueButton }
