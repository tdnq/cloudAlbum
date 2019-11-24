const router =require("koa-router")();

const uploader = require("../middleware/uploader.js");
const photoController= require("../controller/photo.js");
router
    .get("/",photoController.getPhoto)
    .post("/",uploader.single("photo"),photoController.addPhoto);
    // .put("/",photoController.updatePhoto)
    // .del("/",photoController.deletePhoto);
module.exports = router.routes();