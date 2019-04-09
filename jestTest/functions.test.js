functions = require("./functions");
// to be equal to Matchers
test("adds 2+4 equal 4", () =>{
    expect(functions.add(2,4)).toBe(6);
});
// NOT to be equal to 
test("adds 2+7 NOT equal 4", () =>{
    expect(functions.add(2,7)).not.toBe(4);
});
// to be Null
test("should be Null", () =>{
    expect(functions.isNull()).toBeNull();
});
// To be falsy 
test("should be Falsy", () =>{
    expect(functions.checkVal(null)).toBeFalsy();
});

//to Equal because toBe is for primitive data types not for objects and arrays
test("user should be arnab majumdar", () => {
    expect(functions.createUser()).toEqual({firstName: 'arnab', lastName: 'majumdar'});
});

//.toBeLessThan(21)  

//.toMatch

//.toContain matcher for Arrays
test("Arnab should be in TA list", ()=>{
    taList = ["haddassah", "michael", "dan","arnab", "krista"]
    expect(taList).toContain("arnab");
});

//Working with Async Data using Axios.
// test("user fetched media_type should be image", () => {
//     // expect.assertions(1); //test will pass without this. but imp for promise related returns
//     return functions.fetchUser().then(data =>{
//         expect(data.media_type).toEqual("image");
//     });
// });
    


