'use client'

import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
  Button,
  Spinner,
} from '@/components/ui'
import { Pencil2Icon, PlusIcon, TrashIcon } from '@radix-ui/react-icons'
import axios from 'axios'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { useState } from 'react'

export const IssueAddButton = () => {
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

export const IssueEditButton = ({ issueId }: { issueId: number }) => {
  return (
    <div className="my-2">
      <Link href={`/issues/${issueId}/edit`}>
        <Button size="sm">
          <Pencil2Icon className="mr-2" /> Edit Issue
        </Button>
      </Link>
    </div>
  )
}

export const IssueDeleteButton = ({ issueId }: { issueId: number }) => {
  const [isError, setIsError] = useState(false)
  const [isDeleting, setIsDeleting] = useState(false)
  const router = useRouter()

  const handleDeleteIssue = async () => {
    try {
      setIsDeleting(true)
      await axios.delete(`/api/issues/${issueId}`)
      router.push('/issues')
      router.refresh()
    } catch (error) {
      setIsDeleting(false)
      setIsError(true)
    }
  }

  return (
    <>
      <AlertDialog>
        <AlertDialogTrigger asChild>
          <div className="mt-2">
            <Button variant="destructive" disabled={isDeleting} size="sm">
              {isDeleting ? (
                <Spinner />
              ) : (
                <>
                  <TrashIcon className="mr-2" /> Delete Issue
                </>
              )}
            </Button>
          </div>
        </AlertDialogTrigger>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
            <AlertDialogDescription>
              This action cannot be undone. This will permanently delete your
              issue and remove it from our server.
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel>Cancel</AlertDialogCancel>
            <AlertDialogAction onClick={handleDeleteIssue}>
              Continue
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
      <AlertDialog open={isError} onOpenChange={() => setIsError(false)}>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>Uh oh! Something went wrong.</AlertDialogTitle>
            <AlertDialogDescription>
              Please try again after sometime.
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel>Ok</AlertDialogCancel>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </>
  )
}
