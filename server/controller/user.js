const userModel = require("../model/user");

module.exports={
    getUser: async(ctx,next)=>{
        const signInRes = await userModel.getUser(ctx.request.body);
        ctx.body=signInRes;
        await next();
    },
    addUser: async(ctx,next)=>{
        const addRes = await userModel.add(ctx.request.body);
        ctx.body=addRes;
        await next();
    }
}