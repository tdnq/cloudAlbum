/**
 * 传统方式登录注册用户
 */

const localUserDbModel = require("../../initDb/localUser.js");
const userDbModel = require("./user.js");
const { dbConnect, dbClose } = require("../utils/db.js");

const getLocalOpenId = (localuserData) => {
    return `${localuserData.username}${Date.now()}`
}
/**
 * 登录操作
 */
const login = async (authInfo) => {
    let useInfo={username:authInfo.username,password:authInfo.password};
    let user = await getUserByUserInfo(useInfo);
    if (!user) {
        return null;
    }
    const sessionKey = {
        userId: user.openId,
        timeSpan: Date.now()
    };
    return sessionKey;
};
const getUserByUserInfo = async (authInfo) => {
    let res=null;
    await dbConnect();
    await localUserDbModel.findOne(authInfo, (err, data) => {
        if (err) {
            throw new Error(err);
        } else {
            res = data;
        }
    });
    await dbClose();
    return res;
};

/**
 * 注册操作
 */
const add = async (localuserData) => {
    const localOpenId = getLocalOpenId(localuserData);
    localuserData.openId=localOpenId;
    const newLocalUser = new localUserDbModel(localuserData);
    await dbConnect();
    try {
        await newLocalUser.save();
    } catch (err) {
        throw new Error(err);
    }
    await dbClose();
    if(newLocalUser.username){
        const authReault = await userDbModel.add({openId:localOpenId});
        if (authReault.openId) {
            return Object.assign({},{status:200,message:"注册成功"});
        }
    }
};
module.exports = {
    login,
    add,
    getUserByUserInfo
}