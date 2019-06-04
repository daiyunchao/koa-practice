//koa 为static文件设置缓存时间
const Koa = require('koa');
const Router = require('koa-router');
const statics = require('koa-static');
let app = new Koa();
let router = new Router();




let staticRouter = new Router();

//设置图片的缓存时间
staticRouter.get(/\.jpg|\.png|\.gif/i, statics('./client', {
  maxAge: 86400 * 1000 * 0.5,//单位是毫秒
}))

//设置html的缓存时间
staticRouter.get(/\.html/i, statics('./client', {
  maxAge: 86400 * 1000,//单位是毫秒
}))

//设置其他类型的缓存时间
staticRouter.get('*', statics('./client', {
  maxAge: 86400 * 1000 * 10,//单位是毫秒
}))


//整体设置路由
// app.use(statics('./client', {
//   maxAge: 86400 * 1000,//单位是毫秒
//   index: "index.html"
// }))
router.use(staticRouter.routes())
app.use(router.routes())
app.listen(8080)