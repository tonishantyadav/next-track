'use client'

import { Card } from '@/components/ui/card'
import { Bar, BarChart, ResponsiveContainer, XAxis, YAxis } from 'recharts'
import { CountByStatus } from './IssueCountCard'

const IssueChart = ({ countByStatus }: { countByStatus: CountByStatus }) => {
  const data = [
    { label: 'Open', value: countByStatus.open },
    { label: 'In Progress', value: countByStatus.inProgress },
    { label: 'Closed', value: countByStatus.closed },
  ]
  return (
    <Card>
      <ResponsiveContainer width="100%" height={350}>
        <BarChart data={data}>
          <XAxis dataKey={'label'} />
          <YAxis />
          <Bar dataKey="value" barSize={60} fill="hsl(var(--primary))" />
        </BarChart>
      </ResponsiveContainer>
    </Card>
  )
}

export default IssueChart
