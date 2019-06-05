//koa pug的简单使用
const Koa = require('koa');
const Router = require('koa-router');
const statics = require('koa-static');
const Pug = require('koa-pug');
let app = new Koa();
let router = new Router();

new Pug({
  viewPath: './tempter',
  app
});

router.get('/get_html', async ctx => {
  ctx.render('index', {
    rand_num: Math.random().toString(),
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