import type { FastifyInstance } from 'fastify'

import { userRoutes } from './user'

export async function apiRoutes(app: FastifyInstance) {
  await app.register(userRoutes, { prefix: 'users' })
}
