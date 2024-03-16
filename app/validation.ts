import { z } from 'zod'

export const NewIssueSchema = z.object({
  title: z
    .string()
    .min(1, 'Title is required')
    .max(255, 'Title must not exceed 255 characters.'),
  description: z.string().min(1, 'Description is required'),
})
