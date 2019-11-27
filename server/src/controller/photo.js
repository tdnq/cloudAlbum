
const photoModel = require("../model/photo.js");
const queryString = require("querystring");
const url = require("url");

module.exports = {
    addPhoto: async (ctx,next) => {
        const photoInfo=Object.assign({},ctx.req.body,{url:ctx.req.file.path})
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