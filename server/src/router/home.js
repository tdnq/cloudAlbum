const router=require("koa-router")();
const home =require("../controller/home.js");
router
    .get("/",home);
module.exports=router.routes();