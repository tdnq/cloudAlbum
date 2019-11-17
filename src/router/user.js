const koaRouter = require("koa-router");
const router = new koaRouter();
const userController = require("../controller/user.js");
router
    .post("/signIn",userController.getUser)
    .post("/signUp",userController.addUser);
module.exports = router.routes();