const expect = require("expect");

describe("App", () => {
    it("should call the spy correctly", () => {
        var spy = expect.createSpy();
        spy("George", 38);
        expect(spy).toHaveBeenCalledWith("George", 38);
    });
});
