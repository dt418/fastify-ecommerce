import type { FastifyInstance, FastifyReply, FastifyRequest } from 'fastify'

import status from 'http-status'

import type { User } from '~/schemas'

import { CreateUserSchema, UserResponseSchema } from '~/schemas'

export async function userRoutes(fastifyInstance: FastifyInstance) {
  fastifyInstance.post(
    '/',
    {
      schema: {
        body: CreateUserSchema,
        response: {
          201: UserResponseSchema,
        },

        summary: 'Create a user',
        tags: ['User'],
      },
    },
    async (req: FastifyRequest, reply: FastifyReply) => {
      const result = CreateUserSchema.safeParse(req.body)

      if (!result.success) {
        return reply.status(status.BAD_REQUEST).send(result.error.format())
      }

      const user: User = {
        data: {
          ...result.data,
          id: crypto.randomUUID(),
        },
        message: 'User created successfully',
        statusCode: status.CREATED,
      }
      return reply.status(status.CREATED).send(user)
    },
  )
}
