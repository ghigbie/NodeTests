const request = require("supertest");

var app = require("./server").app;

it("should return Yo response", (done) =>{
    request(app)
        .get("/")
        .expect(404)
        .expect(res.body).toInclude({
            error: "Page not found",
            name: "Todo App v1.0"
            });
        })
        .end(done);
});

it("should redturn an object of users", (done) => {
    request(app)
        .get("/users")
        .expect(200)
        .expect(res.body).toBeA(object)
        .end(done);
});
