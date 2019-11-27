const album = require("../../initDb/album.js");
const {dbConnect,dbClose} = require("../utils/db.js");
module.exports = {
    /**
     * 新建相册 
     * @param string 用户id/相册名
     * return {objects}
     */
    add:async(userId,name)=>{
            const newAlbum=new album({userId,name});
            await dbConnect();
            await newAlbum.save();
            await dbClose();
            return newAlbum;
    },

    /**
     * 寻找相册信息
     * @param string 用户id/相册名
     * @return {object} 相册信息
     */
    findAlbumByUserIdAndName: async (userId,name)=>{
        await dbConnect();
        const queryObject = {userId,name};
        const findResult=await album.find(queryObject,(err,data)=>{
            if(err){
                console.log(err);
            }
        });
        await dbClose();
        return findResult;
    },
    /**
     * 更新相册
     * @param string id/name/新相册名
     * @returns {object} 
     */
    update:async(userId,name,newName)=>{
        let updateResult;
        await dbConnect();
        await album.updateOne({userId,name},{name:newName},(err,res)=>{
            if(err){throw new Error(err)}
            updateResult= res;
        });
        await dbClose();
        return updateResult;
    },

    /**
     * 删除某个相册
     * @returns {Array} delResult
     */
    delete: async (userId,name)=>{
        let delResult;
        await dbConnect();
        await album.deleteOne({userId,name},(err,res)=>{
            if(err){
                console.error(err);
            }else{
                delResult = res;
            }
        });
        await dbClose();
        return delResult;
    },

    /**
     * 是否存在某个相册
     * @param string user_id/name
     * @return {boolean}
     */
    isExistAlbum:async(userId,name)=>{
        let findResult = false;
        await dbConnect();
        await album.find({userId,name},(err,data)=>{
            if(err) {throw new Error(err);}
            if(data.length){
                findResult = true;
            }
        })
        await dbClose();
        return findResult;
    }
}
