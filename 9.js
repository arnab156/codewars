var d  = new Date();
console.log(d.getTime());
console.log(d.getDay());
console.log(d.getMonth());
console.log(d.getMinutes());

function decimal(x){
    console.log(parseFloat(x).toFixed(2));
}

decimal(55.3);

var num = 55;
var numToString = num.toString();
console.log(typeof numToString);

//.abs -> returns positive value
//

var num1 = 31;
var num2 = 12;
var num3 = -17;
var num4 = Math.abs(-55);
console.log(Math.min(num1, num2, num3, num4));
console.log(Math.max(num1, num2, num3, num4));

var test = String(23);
console.log(typeof test);

do{
    console.log(num2);
    num2--;
} while (num2>11){
    console.log(num2);
    // num2--;
}

var random = Math.floor(Math.random() * 5) +1;
console.log("random number", random);
