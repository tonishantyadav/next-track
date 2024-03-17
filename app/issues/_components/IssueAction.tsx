import { Button } from '@/components/ui'
import { Pencil2Icon, PlusIcon, TrashIcon } from '@radix-ui/react-icons'
import Link from 'next/link'

const IssueAddButton = () => {
  return (
    <div className="flex justify-end">
      <Link href="/issues/new">
        <Button>
          <PlusIcon className="mr-2" />
          Add Issue
        </Button>
      </Link>
    </div>
  )
}

const IssueEditButton = ({ issueId }: { issueId: number }) => {
  return (
    <div className="my-2">
      <Link href={`/issues/${issueId}/edit`}>
        <Button>
          <Pencil2Icon className="mr-2" /> Edit Issue
        </Button>
      </Link>
    </div>
  )
}

const IssueDeleteButton = ({ issueId }: { issueId: number }) => {
  return (
    <div className="my-2">
      <Button variant="destructive">
        <TrashIcon className="mr-2" /> Delete Issue
      </Button>
    </div>
  )
}

export { IssueAddButton, IssueEditButton, IssueDeleteButton }
