'use client'

import { IssueSchema } from '@/app/validation'
import MarkdownEditor from '@/components/MarkdownEditor'
import { Button, Input, Spinner, useToast } from '@/components/ui'
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form'
import { zodResolver } from '@hookform/resolvers/zod'
import { Issue } from '@prisma/client'
import axios from 'axios'
import { useRouter } from 'next/navigation'
import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { z } from 'zod'

type IssueFormData = z.infer<typeof IssueSchema>

const IssueForm = ({ issue }: { issue?: Issue }) => {
  const form = useForm<IssueFormData>({
    resolver: zodResolver(IssueSchema),
    defaultValues: {
      title: issue?.title || '',
      description: issue?.description || '',
    },
  })
  const router = useRouter()
  const { toast } = useToast()
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleDescriptionChange = (value: string) => {
    form.setValue('description', value)
  }

  const onSubmit = async (data: IssueFormData) => {
    try {
      setIsSubmitting(true)
      await axios.post('/api/issues', data)
      router.push('/issues')
    } catch (error) {
      setIsSubmitting(false)
      toast({
        variant: 'destructive',
        title: 'Uh oh! Something went wrong.',
        description: 'Please try again after sometime.',
      })
    }
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
        <FormField
          control={form.control}
          name="title"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-lg text-slate-200">Title</FormLabel>
              <FormControl>
                <Input
                  className="max-w-lg"
                  placeholder="Add title for the issue"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="description"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-lg text-slate-200">
                Description
              </FormLabel>
              <FormControl>
                <div>
                  <MarkdownEditor onChange={handleDescriptionChange} />
                </div>
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <div className="flex justify-end">
          <Button type="submit">{isSubmitting ? <Spinner /> : 'Submit'}</Button>
        </div>
      </form>
    </Form>
  )
}

export { IssueForm as NewIssueForm }
