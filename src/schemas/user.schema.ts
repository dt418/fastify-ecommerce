import { z } from 'zod'

import { BaseResponseSchema } from './base.schema'

// Zod input schema with OpenAPI metadata
export const RawUserSchema = z.object({
  age: z
    .number()
    .int()
    .min(18)
    .optional()
    .default(18)
    .transform(v => v ?? null)
    .describe('User age'),
  confirmPassword: z.string().min(8).describe('User password confirmation'),
  email: z.string().email().describe('User email'),
  name: z.string().min(1).describe('User name'),
  password: z.string().min(8).describe('User password'),
  phone: z
    .string()
    .optional()
    .default('')
    .transform(v => v ?? null)
    .describe('User phone number'),
})

// Apply `.refine()` after defining the object
export const CreateUserSchema = RawUserSchema.refine(
  data => data.password === data.confirmPassword,
  {
    message: 'Passwords don\'t match',
    path: ['confirmPassword'],
  },
)

export const CreateUserSchemaWithoutPassword = RawUserSchema.omit({
  confirmPassword: true,
  password: true,
})
// Zod output schema
export const UserResponseSchema = z
  .object({
    data: CreateUserSchemaWithoutPassword.extend({
      id: z.string().uuid().describe('User ID'),
    }).describe('User data'),
  })
  .merge(BaseResponseSchema)
  .describe('User response schema')

export type User = z.infer<typeof UserResponseSchema>
export type UserBody = z.infer<typeof CreateUserSchema>
