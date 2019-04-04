// #Find the missing letter

// Write a method that takes an array of consecutive (increasing) letters as input and that returns the missing letter in the array.

// You will always get an valid array. And it will be always exactly one letter be missing. The length of the array will always be at least 2.
// The array will always contain letters in only one case.

// Example:

// ['a','b','c','d','f'] -> 'e'
// ['O','Q','R','S'] -> 'P'
// (Use the English alphabet with 26 letters!)


function findMissingLetter(array){
    var english = new Array( 26 ).fill( 1 ).map( ( _, i ) => String.fromCharCode( 65 + i ) );
    var missing = '';
    var index = 0;
    
    var checkFirst = array[0].toLowerCase();
  
    for (var i = 0; i<english.length; i++){
        // console.log("line 22") works
        // console.log(english[i].toLowerCase(),checkFirst );
        
        if(english[i].toLowerCase() == checkFirst){
        //   console.log(english[i],checkFirst );
        //  index=i;
         
          for(j=0; j<array.length; j++){
           index = i+ j;
        //   console.log(index);
           if(english[index].toLowerCase() != array[j].toLowerCase()){
            // console.log("line 34",index, array[j]);
            //  console.log(english[index]);

              if(array[0] != array[0].toLowerCase()){
                missing = english[index];
                console.log(missing);
                return missing;

              } else{
                missing = english[index].toLowerCase();
                console.log(missing);
                return missing;

              }


           }
          }
  
        }
    }
  
  
    
  }


findMissingLetter(['a','b','c','d','f']);
findMissingLetter(['O','Q','R','S']);

// Other solution
// function findMissingLetter(array) {
//     let first = array[0].charCodeAt(0)
//     for (let i = 1; i < array.length; i++) {
//       if (first + i !== array[i].charCodeAt(0)) {
//         return String.fromCharCode(first + i)
//       }
//     }
//     throw new Error("Invalid input")
//   }

//other solution
// function findMissingLetter(array)
// {
//    var i=array[0].charCodeAt();
//    array.map(x=>  x.charCodeAt()==i?i++:i);
//    return String.fromCharCode(i);
// }