//koa cookies
const Koa = require('koa');
const Router = require('koa-router');
const statics = require('koa-static');
const fs = require('fs');
const path = require('path');
let app = new Koa();
let router = new Router();
//输出文件
app.keys = [
  'asdfsdfsdfwewweewcxxx',
  'sdfsdfislkfdslkjsijdsjsd'
]
router.get('/set', async ctx => {
  ctx.cookies.set('name', 'zhangsan', {
    maxAge: 86400 * 1000,
    signed: true
  })
  ctx.body = 'set cookies ok'
})


router.get('/get', async ctx => {
  let cookies_name_value = ctx.cookies.get('name',
    {
      signed: true
    });
  ctx.body = cookies_name_value;
})


//静态文件
app.use(statics('./client'));


app.use(router.routes())
app.listen(8080)