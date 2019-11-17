const {appKey,appSecret} =  require("../../config.js");
const http = require("http");

// 获取微信登录信息
async function getSession(code){
    const url = `https://api.weixin.qq.com/sns/jscode2session?appid=${appKey}
                             &secret=${appSecret}&js_code=${code}&grant_typt=authorization_code`;
                             return new Promise((resolve,reject)=>{
                                http.request(url,{
                                    method:"POST",
                                },(res)=>{
                                    res.on("error",(e)=>{
                                        reject(e);
                                    });
                                    res.on('end',(e)=>{
                                        resolve(e);
                                    })
                                });
                             });
}

module.exports=getSession;