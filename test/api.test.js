let request = require("supertest");
request = request("http://localhost:3000");
describe("api/album",function(){
    it("get",function(done){
        request
            .get("/api/album/?userId=12&name=hello")
            .expect(function(res){
                if(res.body.length>1){
                    console.log(res.body)
                    throw new Error("相册重复");
                }
            })
            .expect(200)
            .end(done)
    });
    it("post",function(done){
        request
            .post("/api/album/")
            .send({})
            .expect(200)
            .end(done)
    });
});
