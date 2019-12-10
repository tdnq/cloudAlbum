const koa = require("koa");
const serverPort = require("../config.js").port;
const router = require("./router/index.js");
const koaBodyparser =require("koa-bodyparser");

const config=require("../config");
const koaStatic = require("koa-static");
const path =require("path");
const logger = require("./middleware/logger.js");
const app = new koa();


app.use(koaBodyparser());

//控制台打印信息
app.use(logger);
//路由
app.use(router.routes()).use(router.allowedMethods());
app.use(koaStatic(path.join(config.rootPath,"server/www/uploads")));

//app监听
app.listen(serverPort,()=>{  
    console.log("server start at http://localhost:3000");
})
module.exports=app;
