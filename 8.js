"use strict";

var names =["jimmy", "arnab", "puchu", "shontu", "montu"];

for ( const name in names){
    console.log("I am in line 6, for in loop", names[name]);
}

for (const name of names){
    console.log("I am in line 10, for of loop", name);
}

for (const [i, name] of names.entries()){
    console.log((i+1)+" from Line 15: ", name);
}