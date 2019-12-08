const path =require("path");
module.exports={
    appInfo:{
        appId:"wx4c4069f1dd536781",
        appSecret:"7176f91584c1836bad6e66ccc682418c",
    },
    port:3000,
    db:{
        host:"192.168.44.131",
        port:27017,
        dbName:"cloudAlbum"
    },
    rootPath: path.join(__dirname,"..")
}