async function allowOrigin(ctx,next) {
    ctx.set({
        "Access-Control-Allow-Origin":"http://localhost:3001",
        "Access-Control-Allow-Credentials": true,
        "Access-Control-Allow-Headers":"Content-Type"
    });
    await next();
}
module.exports=allowOrigin;