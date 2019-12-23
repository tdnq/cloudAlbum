
const photoModel = require("../model/photo.js");
const serverHost = require("../../config.js").serverHost;
const queryString = require("querystring");
const mongoose = require("mongoose");
const ObjectId = mongoose.Types.ObjectId;
const url = require("url");
const path = require("path");

module.exports = {
    addPhoto: async (ctx, next) => {
        let uploadUrl = path.parse(ctx.req.file.path).base;
        const photoInfo = Object.assign({}, ctx.req.body, { userId: ctx.state.userId }, { url:uploadUrl });
        const addRes = await photoModel.add(photoInfo);
        ctx.body = addRes;
        await next();
    },
    deletePhoto: async (ctx, next) => {
        let photoInfo = ctx.request.body;
        photoInfo._id=ObjectId(photoInfo._id);
        let modifyInfo = {idDeleted:true};
        let res =await photoModel.update(photoInfo,modifyInfo);
        ctx.body=res;
        await next();
    },
    getPhoto: async (ctx, next) => {
        const resUrl = url.parse(ctx.url);
        const photoInfo = queryString.parse(resUrl.query);
        const dealRes = await photoModel.findPhotoByUserIdAndName(photoInfo);
        ctx.body = dealRes;
        await next();
    }
}