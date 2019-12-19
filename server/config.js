const path =require("path");
module.exports={
    serverHost:"http://localhost:3000/",
    webHost:"localhost",
    appInfo:{
        appId:"wx4c4069f1dd536781",
        appSecret:"7176f91584c1836bad6e66ccc682418c",
    },
    port:3000,
    db:{
        host:"192.168.44.132",
        port:27017,
        dbName:"cloudAlbum"
    },
    rootPath: path.join(__dirname,"..")
}