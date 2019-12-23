const webHost = require("../../config.js").webHost;
const adminModel = require("../model/admin.js");
const mongoose = require("mongoose");
const ObjectId = mongoose.Types.ObjectId;
module.exports={
    login:async function(ctx,next){
        let authInfo = ctx.request.body;
        let apiReaponse={
            status:200
        };
        let result = await adminModel.login(authInfo);
        if(result!==null){
            ctx.cookies.set(
                'cloud_album_admin', 
                JSON.stringify(result),
                {
                  domain: webHost,  // 写cookie所在的域名
                  path: '/',       // 写cookie所在的路径
                  maxAge:1000*60*60*24*5,
                  httpOnly: true,  // 是否只用于http请求中获取
                  overwrite: false  // 是否允许重写
                }
              );
              apiReaponse.message="登录成功";
        }else{
            apiReaponse.status=401;
            apiReaponse.message="无法找到用户";
        }
        ctx.body=apiReaponse;
        await next();
    },
    getReviewPhotos:async function(ctx,next){
        let result = await adminModel.getReviewPhotos();
        ctx.body=result;
        await next();
    },
    photoReviewed:async function(ctx,next){
        let photoInfo = ctx.request.body;
        photoInfo._id=ObjectId(photoInfo._id);
        let modifyInfo = {isApproved:true}
        let res =await adminModel.photoReviewed(photoInfo,modifyInfo);
        ctx.body=res;
        await next();
    }
}