// config/env.ts
import type { FastifyServerOptions } from 'fastify'

export const environment = process.env.NODE_ENV ?? 'production'

export const envToLogger: Record<
  'development' | 'production' | 'test',
  boolean | FastifyServerOptions['logger']
> = {
  development: {
    transport: {
      target: 'pino-pretty',
      options: {
        translateTime: 'HH:MM:ss Z',
        ignore: 'pid,hostname',
      },
    },
  },
  production: true,
  test: false,
}
