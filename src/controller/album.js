
const album = require("../model/album.js");
const queryString = require("querystring");
const url = require("url");
module.exports = {
    addAlbum: async (ctx,next) => {
        const {userId , name} = ctx.request.body;
        const dealRes = await album.add(userId, name);
        ctx.body = dealRes;
        await next();
    },
    getAlbum: async(ctx,next) => {
        const resUrl= url.parse(ctx.url);
        const {userId,name} = queryString.parse(resUrl.query);
        const dealRes = await album.findAlbumByUserIdAndName(userId, name);
        ctx.body=dealRes;
        await next();
    },
    updateAlbum:async(ctx,next)=>{
        const {userId,name,newName} = ctx.request.body;
        const isExistAlbum = await album.isExistAlbum(userId,name);
        console.log(isExistAlbum);
        if(isExistAlbum){
            const dealRes = await album.update(userId,name,newName);
            ctx.body=dealRes;
        }else{
            ctx.body="no album";
        }
        await next();
    },
    deleteAlbum: async(ctx,next)=>{
        const {userId,name}= ctx.request.body;
        const isExistAlbum = await album.isExistAlbum(userId,name);
        console.log(isExistAlbum);
        if(isExistAlbum){
            const dealRes = await album.delete(userId,name);
            ctx.body=dealRes;
        }else{
            ctx.body="no this album";
        }
        await next();
    }
}