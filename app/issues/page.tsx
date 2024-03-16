import { Button } from '@/components/ui/button'
import Link from 'next/link'
import React from 'react'
import NewIssueForm from './components/NewIssueForm'

const page = () => {
  return (
    <div>
      <div className="flex justify-end">
        <Button>
          <Link href="/issues/new">Add issue</Link>
        </Button>
      </div>
    </div>
  )
}

export default page
