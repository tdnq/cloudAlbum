const router =require("koa-router")();
const album= require("../controller/album.js");
router
    .get("/",album.getAlbum)
    .post("/",album.addAlbum)
    .put("/",album.updateAlbum)
    .del("/",album.deleteAlbum);
module.exports = router.routes();