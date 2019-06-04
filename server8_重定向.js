//koa 重定向
const Koa = require('koa');
const Router = require('koa-router');
const statics = require('koa-static');
let app=new Koa();
let router=new Router();
router.get('/a',async ctx=>{
  //相对路径转向
  ctx.redirect('/b')
})

router.get('/b',async ctx=>{
  //绝对路径转向
  ctx.redirect('https://www.baidu.com');
})
app.use(router.routes())
app.listen(8080)