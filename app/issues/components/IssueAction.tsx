import { Button } from '@/components/ui/button'
import Link from 'next/link'

export const AddIssueButton = () => {
  return (
    <div className="flex justify-end">
      <Button>
        <Link href="/issues/new">Add Issue</Link>
      </Button>
    </div>
  )
}
