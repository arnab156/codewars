codeWars = require("./12");

test("one letter should return a ", () =>{
    expect(codeWars.firstNonRepeatingLetter("a")).toEqual("a");
});

test("one letter should return b ", () =>{
    expect(codeWars.firstNonRepeatingLetter("ba")).toEqual("b");
});
test("one letter should return o ", () =>{
    expect(codeWars.firstNonRepeatingLetter("omette")).toEqual("o");
});

test("one letter should return A ", () =>{
    expect(codeWars.firstNonRepeatingLetter("plAtterpl")).toEqual("A");
});