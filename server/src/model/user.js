const userDbModel = require("../../initDb/user.js");
const { dbConnect, dbClose } = require("../utils/db.js");


/**
 * 登录操作
 */
const login = async (openId) => {
    let userData = { openId };
    let user = await getUserByOpenId(userData);
    if (!user) {
        user = await add(userData);
    }
    const sessionKey = {
        openId: user.openId,
        timeSpan: Date.now()
    };
    return sessionKey;
};
/**
 * 服务验证
 */
const findUserBySessionKey = async (sessionKey) => {
    const { openId, timeSpan } = sessionKey;
    let userData = { openId };
    if (Date.now - timeSpan > 1000 * 6) {
        return null;
    }
    const user = this.getUserByOpenId(userData);
    if (user.length) {
        return user[0];
    } else {
        return null;
    }
};
const getUserByOpenId = async (userData) => {
    let res;
    await dbConnect();
    await userDbModel.findOne(userData, (err, data) => {
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
const add = async (userData) => {
    const newUser = new userDbModel(userData);
    await dbConnect();
    try {
        await newUser.save();
    } catch (err) {
        throw new Error(err);
    }
    await dbClose();
    return newUser;
};
module.exports = {
    login,
    getUserByOpenId,
    findUserBySessionKey,
    add
}