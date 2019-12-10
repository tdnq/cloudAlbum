const { appId, appSecret } = require("../../../config.js").appInfo;
const https = require("https");

// 获取微信登录信息
async function getSession(code) {
    const url = `https://api.weixin.qq.com/sns/jscode2session?appid=${appId}&secret=${appSecret}&js_code=${code}&grant_typt=authorization_code`;
    return new Promise((resolve, reject) => {
        https.get(url, (res) => {
            let data="";
            res.on("data",(chunk)=>{
                data+=chunk;
            });
            res.on("end",(e)=>{
                resolve(data);
                console.log(code,data);
            });
            res.on("error",(e)=>{
                reject();
            })
        });
    });
}
async function getOpenId(code) {
    const wxLoginReq = await getSession(code);
    let openId=JSON.parse(wxLoginReq).openid;
    if (openId) {
        return openId;
    } else {
        throw new Error("使用微信登录失败");
    }
}

module.exports = getOpenId;