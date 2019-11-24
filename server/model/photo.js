const photo = require("../initDb/photo.js");
const {dbConnect,dbClose} = require("../utils/db.js");
module.exports={
    findPhotoByUserIdAndName:async function(photoInfo){
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
    add: async function(photoInfo){
        const newPhoto= new photo(photoInfo);
        await dbConnect();
        await newPhoto.save();
        await dbClose();
        return newPhoto;
    }
}