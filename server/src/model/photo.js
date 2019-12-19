const photo = require("../../initDb/photo.js");
const albumModel = require("./album.js");
const {dbConnect,dbClose} = require("../utils/db.js");
module.exports={
    findPhotoByUserIdAndName:async function(photoInfo){
        photoInfo.isApproved=true;
        let findRes;
        await dbConnect();
        await photo.find(photoInfo,function(err,data){
            if(err){
                throw new Error(err);
            }
            findRes=data;
        })
        await dbClose();
        return findRes;
    },
    update:async function(photoInfo,modifyInfo){
        let result;
        await dbConnect();
        await photo.updateOne(photoInfo,modifyInfo,(err,res)=>{
            if(err){throw new Error(err)}
            result= res;
        });
        await dbClose();
        return result;
    },
    getReviewPhotos: async function(){
        let findRes;
        await dbConnect();
        await photo.find({isApproved:false},function(err,data){
            if(err){
                throw new Error(err);
            }
            findRes=data;
        })
        await dbClose();
        return findRes;
    },
    add: async function(photoInfo){
        const newPhoto= new photo(photoInfo);
        await albumModel.updateCount({userId:photoInfo.userId,name:photoInfo.album},{count:Number(photoInfo.count)});
        delete photoInfo.count;
        await dbConnect();
        await newPhoto.save();
        await dbClose();
        return newPhoto;
    }
}