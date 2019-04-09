const reverseString = require("./reverseString");

test("reverseString of arnab should be banra", ()=>{
    expect(reverseString("Arnab")).toEqual("banra");
});