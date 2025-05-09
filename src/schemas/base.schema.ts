import { z } from 'zod'

export const BaseResponseSchema = z.object(
  {
    code: z.string().optional().describe('Response code'),
    error: z.string().optional().describe('Error type'),
    message: z.string().describe('Response message'),
    statusCode: z
      .number()
      .int()
      .optional()
      .default(201)
      .describe('HTTP status code'),
  },
  {
    description: 'Base response schema',
  },
)

export type BaseResponse = z.infer<typeof BaseResponseSchema>
