//koa 全局错误处理 & 全局路由错误处理
const Koa = require('koa');
const Router = require('koa-router');
const statics = require('koa-static');
let app = new Koa();
let router = new Router();


//********************************app拦截错误******************************** */
//拦截全部的错误
// app.use(async (ctx, next) => {
//   try {
//     await next();
//   } catch (error) {
//     console.error("has error ==>", error);

//   }

// })

// //模拟一个报错的情况
// app.use(async ctx => {
//   throw new Error("has some error ")
// })

//********************************app拦截错误******************************** */


//********************************路由拦截错误******************************** */
//捕获全部的路由错误
// router.all("*", async (ctx, next) => {
//   try {
//     await next();
//   }
//   catch (e) {
//     console.error("router has error ==>", e);
//   }
// })


// //模拟路由出现错误的情况
// router.get('/aaa', async ctx => {
//   throw new Error("this router has some error ");
// })

//********************************路由拦截错误******************************** */

//********************************路由分级拦截错误******************************** */

let userRouter = new Router();
let newsRouter = new Router();
let cartRouter = new Router();

//拦截user的全部错误

router.use('/user', async (ctx, next) => {
  try {
    console.log("in user");
    
    await next();
  } catch (error) {
    console.log("user router has some error ==>", error);

  }
});


userRouter.get('/get_info', async ctx => {
  ctx.body = 'this is get_info'
})

userRouter.get('/get_error', async ctx => {
  throw new Error('get_error')
})





//静态文件
app.use(statics('./client'));

//先写路由,后挂载
router.use('/user', userRouter.routes());
router.use('/news', newsRouter.routes());
router.use('/cart', cartRouter.routes());
app.use(router.routes())
app.listen(8080)