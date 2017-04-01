const expect = require("expect"),
      utils  = require("./utils");

it("should add two numbers", () => {
    var res = utils.add(33, 11);
    console.log("*******EXPECT RUNNING*********");
    expect(res).toBe(44).toBeA("number");
    // console.log("******************************");

    // if(res !== 44){
    //     throw new Error(`Expected 44, but got ${res}`);
    // }
}); //takes two arguments - the first is a description, and next is a function

it("should async add two numbers", (done) => {
    utils.asyncAdd(4, 3, (sum) => {
        expect(sum).toBe(7).toBeA("number");
        done();
    });
});

it("should async square a number", (done) => {
    utils.asyncSquare(4, (square) => {
        expect(square).toBe(18).toBeA("number");
        done();
    });
});

it("should square a number", () => {
    var res = utils.square(8);
    console.log("*******EXPECT RUNNING*********");
    expect(res).toBe(64).toBeA("number");
    // if(res !== 64){
    //     throw new Errot(`Expected 64, but got ${res}`);
    // }
});

it("should expect some values", () => {
    expect(12).toNotBe(11);
});

it("should epect some values", () => {
    expect({name: "Yippie"}).toEqual({name: "Yippie"})
});

it("should epect some values", () => {
    expect([2,3,4]).toInclude(3);
});

it("shold expect some values", () => {
    expect([2,3,5]).toExclude(7);
});
//should verify that first and last names are set
//assert in includes firstName and lastName with proper values
it("should expect first and last names set as strings", () => {
    var user = {location: "Tucson, AZ"};
    var res = utils.setName(user, "George Higbie");
    expect(user).toEqual(res);
    expect(res).toInclude({
        firstName: "George",
        lastName: "Higbie"
    }).toBeA("object");

    expect(res.firstName).toBeA("string");
    expect(res.lastName).toBeA("string");
});
