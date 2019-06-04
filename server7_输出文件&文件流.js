//koa 输入文件 & 文件流
const Koa = require('koa');
const Router = require('koa-router');
const statics = require('koa-static');
const fs = require('fs');
// const compress=require('koa-compress');
const path = require('path')
let app = new Koa();
let router = new Router();


//输入文件
router.get('/a', async ctx => {
  ctx.set('Content-Type','text/html')
  ctx.body = fs.readFileSync(path.join(__dirname, './client/index.html'));
  
})

//输出文件流
router.get('/b', async ctx => {
  ctx.set('Content-Type','text/html')
  ctx.compress=true;
  ctx.body = fs.createReadStream(path.join(__dirname, './client/index.html'));
})
// app.use(compress({
//   threshold:1,//当超过该值时才会gzip压缩
// }))
app.use(router.routes())
app.listen(8080)