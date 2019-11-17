const mongoose = require("mongoose");


// 连接数据库
async function dbConnect(){
    return new Promise((resolve,reject)=>{
        mongoose.connect("mongodb://localhost:27017/cloudAlbum", { 
                            useUnifiedTopology: true, 
                            useNewUrlParser: true
                        });
          mongoose.connection.on("error",reject);
           mongoose.connection.once('open',()=>{
               resolve();
           });
    })
}


// 关闭数据库
async function dbClose(){
    return new Promise((resolve,reject)=>{
        mongoose.connection.close((err)=>{
            if(err){
                reject(err);
            }else{
                resolve();
            }
        });

    })
}
module.exports={dbConnect,dbClose};
