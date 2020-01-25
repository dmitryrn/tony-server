import Koa from 'koa'
import Router from 'koa-router'

const app = new Koa()

const router = new Router()

router
  .get('/test', (ctx) => {
    ctx.body = 'test'
  })

app
  .use(router.routes())
  .use(router.allowedMethods())

app.listen(3000, () => console.log('listen on 3000'))
