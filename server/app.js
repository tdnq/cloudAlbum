const koa = require("koa");
const router = require("./router/index.js");
const koaBodyparser =require("koa-bodyparser");
const logger = require("./middleware/logger.js");
const app = new koa();


app.use(koaBodyparser());

//控制台打印信息
app.use(logger);
//路由
app.use(router.routes()).use(router.allowedMethods());


//app监听
app.listen(3000,"localhost",()=>{
    console.log("server start at http://localhost:3000");
})