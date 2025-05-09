// config/env.ts
import type { FastifyServerOptions } from 'fastify'

import process from 'node:process'

export const environment = process.env.NODE_ENV ?? 'production'

export const envToLogger: Record<
  'development' | 'production' | 'test',
  boolean | FastifyServerOptions['logger']
> = {
  development: {
    transport: {
      options: {
        ignore: 'pid,hostname',
        translateTime: 'HH:MM:ss Z',
      },
      target: 'pino-pretty',
    },
  },
  production: true,
  test: false,
}
