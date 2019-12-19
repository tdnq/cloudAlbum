const router=require("koa-router")();
const adminController =require("../controller/admin.js");
router
    .post("/login",adminController.login)
    .get("/reviewPhoto",adminController.getReviewPhotos)
    .post("/reviewPhoto",adminController.photoReviewed);
module.exports=router.routes();