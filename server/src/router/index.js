const koaRouter=require("koa-router");
const router=new koaRouter();
const home=require("./home.js");
const album=require("./album.js");
const photo=require("./photo.js");
const user = require("./user.js");
router.use("/",home)
    .use("/api/album",album)
    .use("/api/photo",photo)
    .use("/api/user",user);
module.exports=router;