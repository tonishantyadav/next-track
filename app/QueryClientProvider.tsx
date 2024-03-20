'use client'

import { PropsWithChildren } from 'react'

import {
  QueryClientProvider as BaseQueryClientProvider,
  QueryClient,
} from '@tanstack/react-query'

const queryClient = new QueryClient()

const QueryClientProvider = ({ children }: PropsWithChildren) => {
  return (
    <BaseQueryClientProvider client={queryClient}>
      {children}
    </BaseQueryClientProvider>
  )
}

export default QueryClientProvider
