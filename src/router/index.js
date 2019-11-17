const koaRouter=require("koa-router");
const router=new koaRouter();
const home=require("./home.js");
const album=require("./album.js");
const user = require("./user.js");
router.use("/",home)
            .use("/api/album",album)
            .use("/api/user",user);
module.exports=router;