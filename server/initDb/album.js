const mongoose = require("mongoose");
const albumSchema =new mongoose.Schema({
    userId:{
        type:String
    },
    name:{
        type:String
    }
},
    {
        versionKey:false,
        timestamps: {createdAt:"created",updatedAt:"updated"}
    }
);
module.exports =mongoose.model("album",albumSchema,"album");