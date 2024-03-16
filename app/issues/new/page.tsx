import NewIssueForm from '../components/NewIssueForm'
import delay from 'delay'

const page = async () => {
  await delay(2000)
  return (
    <div>
      <NewIssueForm />
    </div>
  )
}

export default page
