import Koa from 'koa'
import Router from 'koa-router'
import { Client } from 'pg'
import dotenv from 'dotenv'

import { logger } from './logger'

dotenv.config()

const app = new Koa()
const router = new Router()

const client = new Client({
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  host: process.env.DB_HOST || 'localhost',
})

router
  .get('/test', (ctx) => {
    ctx.body = 'test'
  })

app
  .use(router.routes())
  .use(router.allowedMethods());

(async () => {
  try {
    await client.connect()

    logger.info('connected to pg')

    app.listen(3000, () => logger.info('listen on 3000'))
  } catch (error) {
    logger.error(error.message, ['top-level'])
  }
})()
