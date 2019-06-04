//koa中设置ctx的全局变量
const Koa = require('koa');
const Router = require('koa-router');
let app = new Koa();
let router = new Router();
router.get('/user/:uid', async (ctx, next) => {
  let { uid } = ctx.params;
  app.context.uid = uid;
  next();
});

router.get('/user/*', async (ctx, next) => {
  ctx.body = ctx.uid;
});

app.use(router.routes())
app.listen(8080)