const mongoose = require("mongoose");

const {db}=require("../../config");
// 连接数据库
const dbConnectString=`mongodb://${db.host}:${db.port}/${db.dbName}`;
async function dbConnect(){
    return new Promise((resolve,reject)=>{
        mongoose.connect(dbConnectString, { 
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
