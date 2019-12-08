const koaRouter = require("koa-router");
const router = new koaRouter();
const userController = require("../controller/user.js");
router
    .post("/logIn",userController.login)
    .post("/logOut",userController.addUser);
module.exports = router.routes();