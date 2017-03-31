const expect = require("expect"),
      utils  = require("./utils");

it("should add two numbers", () => {
    var res = utils.add(33, 11);
    console.log("*******EXPECT RUNNING*********");
    expect(res).toBe(40);
    // console.log("******************************");

    // if(res !== 44){
    //     throw new Error(`Expected 44, but got ${res}`);
    // }
}); //takes two arguments - the first is a description, and next is a function

it("should square a number", () => {
    var res = utils.square(8);
    if(res !== 64){
        throw new Errot(`Expected 64, but got ${res}`);
    }
});
