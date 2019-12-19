const koaRouter=require("koa-router");
const router=new koaRouter();
const home=require("./home.js");
const album=require("./album.js");
const photo=require("./photo.js");
const user = require("./user.js");
const admin = require("./admin.js");
router.use("/",home)
    .use("/api/album",album)
    .use("/api/photo",photo)
    .use("/api/admin",admin)
    .use("/api/user",user);
module.exports=router;