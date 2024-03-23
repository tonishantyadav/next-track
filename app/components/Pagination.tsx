'use client'

import {
  ChevronLeftIcon,
  ChevronRightIcon,
  DoubleArrowLeftIcon,
  DoubleArrowRightIcon,
} from '@radix-ui/react-icons'
import { useRouter, useSearchParams } from 'next/navigation'
import { Button } from './ui'

interface Props {
  itemCount: number
  pageSize: number
  currentPage: number
}

const Pagination = ({ itemCount, pageSize, currentPage }: Props) => {
  const router = useRouter()
  const searchParams = useSearchParams()

  const pageCount = Math.ceil(itemCount / pageSize)
  if (pageCount <= 1) return null

  const onChangePage = (page: number) => {
    const params = new URLSearchParams(searchParams)
    params.set('page', page.toString())
    router.push('?' + params.toString())
  }

  return (
    <div className="flex items-center justify-end gap-2">
      <div>
        <span className="text-sm">
          Page {currentPage} of {pageCount}
        </span>
      </div>
      <div className="flex gap-2">
        <Button
          size="icon"
          disabled={currentPage === 1}
          onClick={() => onChangePage(1)}
        >
          <DoubleArrowLeftIcon />
        </Button>
        <Button
          size="icon"
          disabled={currentPage === 1}
          onClick={() => onChangePage(currentPage - 1)}
        >
          <ChevronLeftIcon />
        </Button>
        <Button
          size="icon"
          disabled={currentPage === pageCount}
          onClick={() => onChangePage(currentPage + 1)}
        >
          <ChevronRightIcon />
        </Button>
        <Button
          size="icon"
          disabled={currentPage === pageCount}
          onClick={() => onChangePage(pageCount)}
        >
          <DoubleArrowRightIcon />
        </Button>
      </div>
    </div>
  )
}

export default Pagination
