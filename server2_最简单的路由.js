//最简单的路由

const Koa = require('koa');
const Router = require('koa-router');
let app = new Koa();
let router = new Router();
router.get('/a', async ctx => {
  ctx.body = 'ok'
});

//
app.use(router.routes())
app.listen(8080)