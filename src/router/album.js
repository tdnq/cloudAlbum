const router =require("koa-router")();
const album= require("../controller/album.js");
router
    .get("/getAlbum",album.getAlbum)
    .post("/addAlbum",album.addAlbum)
    .put("/updateAlbum",album.updateAlbum)
    .del("/deleteAlbum",album.deleteAlbum);
module.exports = router.routes();