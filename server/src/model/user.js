const userDbModel = require("../initDb/user.js");
const {dbConnect,dbClose} =require("../utils/db.js");

module.exports = {
    /**
     * 登录操作
     */
    getUser:async (userData)=>{
        let res;
       await  dbConnect();
       await userDbModel.findOne(userData,(err,data)=>{
        if(err){
            throw new Error(err);
        }else{
            res=data;
        }
       });
       await dbClose();
       return res;
    },
    /**
     * 注册操作
     */
    add: async(userData)=>{
            const newUser = new userDbModel(userData);
            await dbConnect();
            try{
                await newUser.save();
            }catch(err){
                throw new Error(err);
            }
            await dbClose();
            return newUser;
    }
}