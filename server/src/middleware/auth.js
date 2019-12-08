/**
 * 验证用户是否登录
 */

 async function auth(ctx,next){
    const sessionKey=ctx.get("x-session");
    if(!sessionKey){
        ctx.throw(401,"请求头未包含验证信息");
    }
    const user=await findUserBySessionKey(sessionKey);
    if(user){
        ctx.state.user={
            id:user._id,
            name:user.name,
            avatar:user.avatar,
            isAdmin:user.userType===1
        }
    }else{
        ctx.throw(401,"验证信息过期");
    }
    console.log(ctx);
    await next();
 }