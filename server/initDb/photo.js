const mogoose = require("mongoose");

const photoSchema = new mogoose.Schema({
    usrId:{
        type:String
    },
    url:{
        type:String
    },
    isApproved:{
        type:Boolean,
        default:null
    },
    albumId:{
        type:mogoose.Schema.Types.ObjectId
    },
    created:{
        type:Date,
        default:Date.now
    },
    idDeleted:{
        type:Boolean,
        default:false
    }
});
module.exports=mogoose.model("photo",photoSchema,'photo');