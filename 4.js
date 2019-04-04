// Sheldon, Leonard, Penny, Rajesh and Howard are in the queue for a "Double Cola" drink vending machine; there are no other people in the queue. The first one in the queue (Sheldon) buys a can, drinks it and doubles! The resulting two Sheldons go to the end of the queue. Then the next in the queue (Leonard) buys a can, drinks it and gets to the end of the queue as two Leonards, and so on.

// For example, Penny drinks the third can of cola and the queue will look like this:

// Rajesh, Howard, Sheldon, Sheldon, Leonard, Leonard, Penny, Penny
// Write a program that will return the name of the person who will drink the n-th cola.

// Input
// The input data consist of an array which contains at least 1 name, and single integer n.

// 1  ≤  n  ≤  10000000000

// Output / Examples
// Return the single line — the name of the person who drinks the n-th can of cola. The cans are numbered starting from 1.

// whoIsNext(["Sheldon", "Leonard", "Penny", "Rajesh", "Howard"], 1) == "Sheldon"
// whoIsNext(["Sheldon", "Leonard", "Penny", "Rajesh", "Howard"], 52) == "Penny"
// whoIsNext(["Sheldon", "Leonard", "Penny", "Rajesh", "Howard"], 7230702951) == "Leonard"

// names = ["Sheldon", "Leonard", "Penny", "Rajesh", "Howard"]
// r = 1
// res = "Sheldon"
// Test.assertEquals(whoIsNext(names, r), res)

function whoIsNext(names, r){
    //your code here
    
    var reverseNames=names;
    for(var i =0; i< r; i++){
        var drinker = reverseNames[0];
        reverseNames = names.reverse();
        reverseNames.pop();
        names= reverseNames.reverse();
        names.push(drinker);
        names.push(drinker);
    }
    console.log(drinker);
        return drinker;  
  }



names = ["Sheldon", "Leonard", "Penny", "Rajesh", "Howard"]
r = 5
res = "Sheldon"
whoIsNext(names, r);