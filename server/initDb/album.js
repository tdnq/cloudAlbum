const mongoose = require("mongoose");
const albumSchema =new mongoose.Schema({
    userId:{
        type:String
    },
    name:{
        type:String
    },
    count:{
        type:Number,
        default:0
    }
},
    {
        versionKey:false,
        timestamps: {createdAt:"created",updatedAt:"updated"}
    }
);
module.exports =mongoose.model("album",albumSchema,"album");