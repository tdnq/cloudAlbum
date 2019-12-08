let request = require("supertest");
const serverPort = require("../config.js").port;
request = request(`http://localhost:${serverPort}`);
describe("/api/album",function(){
    it("post",function(done){
        request
            .post("/api/album/")
            .send({userId:"123456",name:"test1234567"})
            .expect(200)
            .end(done)
    });
    it("get",function(done){
        request
            .get("/api/album/?userId=123456&name=test1234567")
            .expect(200)
            .end(done)
    });
    it("put",function(done){
        request
            .put("/api/album")
            .send({"userId":"123456","name":"test1234567","newName":"test12345678"})
            .expect(200)
            .end(done)
    });
    it("delete",(done)=>{
        request
            .del("/api/album")
            .send({userId:"123456",name:"test12345678"})
            .expect(200)
            .end(done)
    });


});
