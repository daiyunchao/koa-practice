//koa koa-bodyparser的使用
const Koa = require('koa');
const Router = require('koa-router');
const statics = require('koa-static');
const fs = require('fs');
const path = require('path');
const bodyParse = require('koa-bodyparser');
let app = new Koa();
let router = new Router();

app.use(bodyParse())

//输出文件
router.get('/index', async ctx => {
  ctx.compress = true;
  ctx.set('Content-Type', 'text/html');
  ctx.body = fs.createReadStream(path.join(__dirname, './client/index.html'));
})

//获取post上来的请求参数
router.post('/post_test', async ctx => {
  console.log("in post test", ctx.request);
  let { name, age } = ctx.request.body;
  console.log("fileds name===>", name);
  console.log("fileds age===>", age);
  ctx.body = {
    "has_error": false,
    "msg": `my name is ${name} and I'm ${age} years old`
  }
})

//静态文件
app.use(statics('./client'));


app.use(router.routes())
app.listen(8080)