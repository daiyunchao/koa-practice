//koa ejs的简单使用
const Koa = require('koa');
const Router = require('koa-router');
const statics = require('koa-static');
const render = require('koa-ejs');
const path = require('path');
let app = new Koa();
let router = new Router();
render(app, {
  cache: false,
  layout: false,
  root: path.join(__dirname, './tempter'),
  viewExt: 'ejs'
})

router.get('/get', async ctx => {
  console.log("this is get router");

  await ctx.render('index', {
    title: "这是ejs显示的title",
    arr: [
      { name: "zhangsan", age: 18, "gender": "男" },
      { name: "lucy", age: 19, "gender": "女" },
      { name: "lili", age: 20, "gender": "女" }
    ],
    json_data: { "name": "王二麻子", "age": 22, "gender": "中间人" }
  })
})
//静态文件
app.use(statics('./client'));

app.use(router.routes())
app.listen(8080)