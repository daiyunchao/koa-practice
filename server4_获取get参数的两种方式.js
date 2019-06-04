//router获取参数的几种方式
const Koa = require('koa');
const Router = require('koa-router');
let app = new Koa();
let router = new Router();
router.get('/user/:uid', async ctx => {
  let { uid } = ctx.params;
  ctx.body = uid;
});

router.get('/cart', async ctx => {
  let {name} = ctx.query;
  ctx.body = name;
})
app.use(router.routes())
app.listen(8080)