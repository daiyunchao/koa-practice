//koa 处理文件的上传 废弃...
const Koa = require('koa');
const Router = require('koa-router');
const statics = require('koa-static');
const fs = require('fs');
const path = require('path');
const body = require('koa-better-body');
let app = new Koa();
let router = new Router();
//输出文件
router.get('/index', async ctx => {
  ctx.compress = true;
  ctx.set('Content-Type', 'text/html');
  ctx.body = fs.createReadStream(path.join(__dirname, './client/index2.html'));
})

//获取post上来的请求参数
app.use(body({
  'fields':true,
  'files':true,
  'uploaddir':'./client/uploads'
}))
router.post('/upload_test', async ctx => {
  console.log("in upload test", ctx.request);
  let { fields,files } = ctx.request;
  console.log("fields ==>", fields);
  console.log("files ==>", files);

})

//静态文件
app.use(statics('./client'));


app.use(router.routes())
app.listen(8080)