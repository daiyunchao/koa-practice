//koa koa-static的基本使用
const Koa = require('koa');
const Router = require('koa-router');
const statics = require('koa-static');
const fs=require('fs');
const path=require('path')
let app = new Koa();
let router = new Router();
app.use(statics('./client', {
  index: "index.html"
}));
app.use(router.routes())
app.listen(8080)