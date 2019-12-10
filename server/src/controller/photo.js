
const photoModel = require("../model/photo.js");
const queryString = require("querystring");
const url = require("url");
const path=require("path");

module.exports = {
    addPhoto: async (ctx,next) => {
        let uploadUrl= path.parse(ctx.req.file.path).base;
        const photoInfo=Object.assign({},ctx.req.body,{url:uploadUrl});
        const addRes=await photoModel.add(photoInfo);
        ctx.body=addRes;
        await next();
    },
    getPhoto: async(ctx,next) => {
        const resUrl= url.parse(ctx.url);
        const photoInfo = queryString.parse(resUrl.query);
        const dealRes = await photoModel.findPhotoByUserIdAndName(photoInfo);
        ctx.body=dealRes;
        await next();
    }
}