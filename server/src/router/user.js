const koaRouter = require("koa-router");
const router = new koaRouter();
const userController = require("../controller/user.js");
const localUserController=require("../controller/localUser");
router
    .post("/logIn",userController.login)
    .post("/local/login",localUserController.login)
    .post("/local/logup",localUserController.logup);
module.exports = router.routes();