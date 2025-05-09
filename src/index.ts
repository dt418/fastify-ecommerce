/* eslint-disable no-console */
import process from 'node:process'

import { buildApp } from './app'
/**
 * Bootstrap
 */
async function start() {
  const app = await buildApp()
  try {
    await app.listen({ port: 3000 })
    console.log('Server running at http://localhost:3000')
  }
  catch (err) {
    app.log.error(err)
    process.exit(1)
  }
}

start()
