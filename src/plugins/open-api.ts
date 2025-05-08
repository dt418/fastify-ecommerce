import swagger from '@fastify/swagger'
import swaggerUI from '@fastify/swagger-ui'
import fp from 'fastify-plugin'
import {
  createJsonSchemaTransformObject,
  jsonSchemaTransform,
} from 'fastify-type-provider-zod'
import { API_DOCS_PREFIX } from '~/config/api'
import { UserResponseSchema } from '~/schemas'

export const swaggerPlugin = fp(async (fastify) => {
  await fastify.register(swagger, {
    openapi: {
      info: {
        title: 'Education API',
        description: 'API documentation',
        version: '1.0.0',
      },
    },
    transform: jsonSchemaTransform,
    transformObject: createJsonSchemaTransformObject({
      schemas: {
        User: UserResponseSchema,
      },
    }),
  })

  await fastify.register(swaggerUI, {
    routePrefix: API_DOCS_PREFIX,
  })
})
