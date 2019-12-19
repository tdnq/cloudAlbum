const userModel=require("./user.js");
const localUserModel = require("./localUser.js");
const photoModel = require("./photo.js");
/**
 * 登录操作
 */
const login = async (authInfo) => {
    let localUserInfo={username:authInfo.username,password:authInfo.password};
    let localUser = await localUserModel.getUserByUserInfo(localUserInfo);
    if (!localUser) {
        return null;
    }
    let user = await userModel.getUserByOpenId({openId:localUser.openId});
    let adminSessionKey =null;
    if(user.userType===1) {
        adminSessionKey={
            userId: user.openId,
            timeSpan: Date.now()
        }
    };
    return adminSessionKey;
};
async function getReviewPhotos(){
    try{
        let res =await photoModel.getReviewPhotos();
        return res;
    }catch(err){
        throw new Error(err);
    }

}
async function photoReviewed(photoInfo,modifyInfo){

    try{
        let res=photoModel.update(photoInfo,modifyInfo);
        return res;
    }catch{
        console.log("照片修改出错");
    }
}
module.exports={
    login,
    getReviewPhotos,
    photoReviewed
}