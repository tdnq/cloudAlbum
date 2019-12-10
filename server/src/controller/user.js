const userModel = require("../model/user");
const getOpenId=require("./wxSign/wx.js");
module.exports={
    getUser: async(ctx,next)=>{
        const signInRes = await userModel.getUser(ctx.request.body);
        ctx.body=signInRes;
        await next();
    },
    login:async(ctx,next)=>{
        const {code}= ctx.request.body;
        
        const openId=await getOpenId(code);
        const sessionKey = await userModel.login(openId);
        ctx.body=sessionKey;
        console.log(sessionKey)
        await next();
    },
    addUser: async(ctx,next)=>{
        const addRes = await userModel.add(ctx.request.body);
        ctx.body=addRes;
        await next();
    }
}