const purchaseItems =  function (essen1="milk", essen2='bread', ...optional){
    console.log(essen1+", "+essen2+", "+optional.join(", "))
};

purchaseItems("bread", "milk");
purchaseItems("bread", "milk", "yeast", "jelly");

const MustHaves = ["break", "milk"];
const alsoHaves = ["egg", "yeast", "donuts", "tea"];

purchaseItems(...MustHaves, ...alsoHaves);

const items = ["cheese", "milk"];

purchaseItems(...items);
purchaseItems("cheese");
purchaseItems();

console.log("chocolate", ...items, "mango");


const placeOrder = function(id, amount, shipping= amount<20? 5:10, date=new Date()){
    ;
    
    console.log("shipping charge for id: "+ id +" is $"+shipping+" Date:"+ date.getDate());
};

placeOrder(1,12.10,3,new Date('05/15/2019'));
placeOrder(1,25.20,10);
placeOrder(1,12.05);
placeOrder(1,25.30);
placeOrder(1,12.20,undefined, new Date('6/12/2019'));