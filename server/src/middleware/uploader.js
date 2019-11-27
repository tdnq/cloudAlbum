//文件上传
const path=require("path");
const koaMulter=require("koa-multer");
const {rootPath} = require("../../config.js");
const storage = koaMulter.diskStorage({
    destination:path.join(rootPath,"www/uploads"),
    filename: function (req, file,cb) {
        const ext = path.extname(file.originalname);
        cb(null,Date.now()+ext);
      }
});
const uploader=koaMulter({storage:storage});
module.exports=uploader;
