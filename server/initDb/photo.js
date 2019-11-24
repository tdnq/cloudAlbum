const mogoose = require("mongoose");

const photoSchema = new mogoose.Schema({
    userId: {
        type: String
    },
    url: {
        type: String
    },
    isApproved: {
        type: Boolean,
        default: false
    },
    albumName: {
        type: String,
        default:""
    },
    idDeleted: {
        type: Boolean,
        default: false
    }
},
    {
        versionKey: false,
        timestamps: { createdAt: "created", updatedAt: "updated" }
    }
);
module.exports = mogoose.model("photo", photoSchema, 'photo');