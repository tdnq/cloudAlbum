const {dbConnect,dbClose}=require("../utils/db.js")
const albumModel = require("./album.js");
const userModel =require("./user.js");
const photoModel = require("./photo.js");
dbConnect();

//初始化数据库
async function initdb(){
    const album=new albumModel();
    const user =new userModel();
    const photo = new photoModel();
    await   album.save();
    await   user.save();
    await   photo.save();
    console.log("db init end");
}
initdb()