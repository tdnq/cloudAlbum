const mongoose = require("mongoose");
const mongoSchema = mongoose.Schema;
mongoose.set('useCreateIndex', true);
const localUserSchema = new mongoSchema({
    username:{
        type:String,
        index:true,
        unique:true
    },
    openId:{
        type:String
    },
    password:{
        type:String
    },
    email:{
        type:String
    },
    avatar:{
        type:String
    },
    userSource:{
        type:String
    }
});
module.exports=mongoose.model("localUser",localUserSchema,"localUser");