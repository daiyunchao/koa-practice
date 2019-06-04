//koa koa-session
const Koa = require('koa');
const Router = require('koa-router');
const statics = require('koa-static');
const session = require('koa-session');
let app = new Koa();
let router = new Router();
//输出文件
app.keys = [
  'asdfsdfsdfwewweewcxxx',
  'sdfsdfislkfdslkjsijdsjsd'
]
app.use(session({
  maxAge: 20 * 60 * 1000,
  renew: true
}, app))
router.get('/set', async ctx => {
  if (!ctx.session['view']) {
    ctx.session['view'] = 1;
  } else {
    ctx.session['view'] += 1;
  }
  ctx.body = `当前的session view值是 ${ctx.session.view}`
})



//静态文件
app.use(statics('./client'));


app.use(router.routes())
app.listen(8080)