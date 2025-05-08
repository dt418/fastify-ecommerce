import fastifyRateLimit from '@fastify/rate-limit'
import Fastify from 'fastify'
import {
  type ZodTypeProvider,
  serializerCompiler,
  validatorCompiler,
} from 'fastify-type-provider-zod'
import { API_PREFIX } from './config/api'
import { envToLogger, environment } from './config/env'
import { swaggerPlugin } from './plugins'
import { apiRoutes } from './routes'

export async function buildApp() {
  const loggerOption =
    envToLogger[(environment as keyof typeof envToLogger) ?? 'production'] ??
    true

  const app = Fastify({
    logger: loggerOption,
  })

  app.setValidatorCompiler(validatorCompiler)
  app.setSerializerCompiler(serializerCompiler)
  app.withTypeProvider<ZodTypeProvider>()

  /**
   * Register plugins
   */
  await app.register(swaggerPlugin)
  await app.register(fastifyRateLimit)

  /**
   * Register routes
   */
  await app.register(apiRoutes, { prefix: API_PREFIX })

  return app
}
