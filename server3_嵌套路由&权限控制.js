//嵌套路由&权限控制
const Koa = require('koa');
const Router = require('koa-router');
let app = new Koa();
let router = new Router();

let userRouter = new Router();
let newsRouter = new Router();
let cartRouter = new Router();

let companyUserRouter = new Router();
let adminUserRouter = new Router();


companyUserRouter.get('/a', async ctx => {
  ctx.body = 'company a';
});

adminUserRouter.get('/a', async ctx => {
  ctx.body = 'admin a';
})


userRouter.use('/company', companyUserRouter.routes());
userRouter.use('/admin/*', async (ctx, next) => {
  //判断用户是否是管理员
  //如果是管理员则 next()
  //如果不是管理员 则不next()
  let rand=Math.random()*10;
  if (rand >3) {
    ctx.throw(400,'user are not admin role')
  }
  else {
    next();
  }
})
userRouter.use('/admin', adminUserRouter.routes());
router.use('/news', newsRouter.routes())
router.use('/cart', cartRouter.routes())
router.use('/user', userRouter.routes())



app.use(router.routes())
app.listen(8080)