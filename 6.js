
//practice of ES6 -  rediscovering JavaScript - Venkat Subramanyam - Page 43
var amountAfterTax = function(amount, fedTax = 0, stateTax=0, localTax=0){
    // total = amount+ amount*((fedTax+stateTax+localTax)/100);
    return amount+ amount*((fedTax+stateTax+localTax)/100);
}


const amount = 25.12;
const fedTax = 10;
const stateTax = 2;
const localTax = 0.5;

console.log(amountAfterTax(amount));
console.log(amountAfterTax(amount, fedTax));
console.log(amountAfterTax(amount, fedTax, stateTax));
console.log(amountAfterTax(amount,fedTax, stateTax, localTax));

// console.log(`${amount*fedTax/100}`)