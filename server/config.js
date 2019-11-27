const path =require("path");
module.exports={
    appInfo:{
        appKey:24,
        appSecret:3424,
    },
    db:{
        host:"192.168.44.128",
        port:27017,
        dbName:"cloudAlbum"
    },
    rootPath: path.join(__dirname,"..")
}