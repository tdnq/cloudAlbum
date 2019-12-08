const { appId, appSecret } = require("../../../config.js").appInfo;
const https = require("https");

// 获取微信登录信息
async function getSession(code) {
    let testCode="023Vac292m9FgK0oncZ82fle292Vac2f";
    const url = `https://api.weixin.qq.com/sns/jscode2session?appid=${appId}&secret=${appSecret}&js_code=${testCode}&grant_typt=authorization_code`;
    return new Promise((resolve, reject) => {
        https.get(url, (res) => {
            let data="";
            res.on("data",(chunk)=>{
                data+=chunk;
            });
            res.on("end",(e)=>{
                resolve("123456");
            });
            res.on("error",(e)=>{
                reject();
            })
        });
    });
}
async function getOpenId(code) {
    const openId = await getSession(code);
    if (openId) {
        return openId;
    } else {
        throw new Error("使用微信登录失败");
    }
}

module.exports = getOpenId;