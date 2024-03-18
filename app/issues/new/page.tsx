import dynamic from 'next/dynamic'
import { IssueSkeletonLoading } from '../_components'

const IssueForm = dynamic(() => import('@/app/issues/_components/IssueForm'), {
  ssr: false,
  loading: () => <IssueSkeletonLoading />,
})

const IssueAddPage = async () => {
  return (
    <div>
      <IssueForm />
    </div>
  )
}

export default IssueAddPage
