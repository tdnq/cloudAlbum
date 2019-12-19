
async function allowOrigin(ctx, next) {
    let cookie_cloud_album = ctx.cookies.get("cloud_album");
    let cookieData;
    if(cookie_cloud_album){
        try {
            cookieData=JSON.parse(cookie_cloud_album)
        } catch(err){
            console.error(err)
        }
    }
    if(!ctx.request.url.startsWith("/api/admin")){
        if (cookie_cloud_album&&ctx.request.method==="POST") {
            ctx.request.body.authInfo = cookieData;
            ctx.state.userId=cookieData.userId
        }else if(cookie_cloud_album&&ctx.request.method==="GET"){
            try{
                if(ctx.request.url.includes("?")){
                    ctx.request.url+=`&userId=${cookieData.userId}`;
                }else{
                    ctx.request.url+=`?userId=${cookieData.userId}`;
                }
            }catch(err){
                console.error(err);
            }
        }
    }
    ctx.set({
        "Access-Control-Allow-Origin": "http://localhost:3001",
        "Access-Control-Allow-Credentials": true,
        "Access-Control-Allow-Headers": "Content-Type,x-requested-with"
    });
    await next();
}
module.exports = allowOrigin;