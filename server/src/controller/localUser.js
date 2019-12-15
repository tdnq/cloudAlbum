const localUserModel = require("../model/localUser");
function setCookie(ctx,name,value){
    console.log(ctx,ctx.request)
    ctx.cookies.set(
        name,
        "value",
        {
            domain:"locahost",
            path:"/",
            maxAge:"1000*60*60",
            expires:Date.now()+1000*5,
            httpOnly:false,
            overwrite:false
        }

    )
};
module.exports={
    logup:async function(ctx,next){
        let localUserData=ctx.request.body;
        const result= await localUserModel.add(localUserData);
        ctx.body=result;
        await next();
    },
    login:async function(ctx,next){
        let authInfo = ctx.request.body;
        let apiReaponse={
            status:200
        };
        let result = await localUserModel.login(authInfo);
        if(result!==null){
            ctx.cookies.set(
                'cloud_album', 
                JSON.stringify(result),
                {
                  domain: 'localhost',  // 写cookie所在的域名
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
    }
}