const mongoose = require("mongoose");
const mongoSchema = mongoose.Schema;
mongoose.set('useCreateIndex', true);
const userSchema = new mongoSchema({
    openId:{
        type:String,
        index:true,
        unique:true
    },
    created:{
        type:Date,
        default:Date.now
    },
    lastLogin:{
        type:Date
    },
    name:{
        type:String,
        index:true
    },
    avatar:{
        type:String
    },
    userType:{
        type:Number
    }
});
module.exports=mongoose.model("user",userSchema,"user");