const request = require("supertest");

var app = require("./server").app;

it("should return Yo response", (done) =>{
    request(app)
        .get("/")
        .expect("<h1>Yo!</h1>")
        .end(done);
});
