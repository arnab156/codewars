const codeWars = {

    firstNonRepeatingLetter: function(s) {

        if(!s){
            return '';
        }
        // Add your code here
        // if it is one letter, return the letter
          if (s.length == 1){
              return s
          } else if(s.length ==2 ){ // else if it is two letter word, return the FIRST letter
                  return s.charAt(0);
          } 
          // for more three or more characters
          else{ 

            var splitStr = s.split(""); //saves as an array so we can loop nth character with the subsequent ones.
            const arrayLength = splitStr.length;
            var checkedItems = [];

            for (var i = 0; i< arrayLength; i++){
                var firstItem = splitStr[0];
                var arrayLeft = splitStr.slice(1);
                var firstLower  = firstItem.toLowerCase();
                var firstUpper = firstItem.toUpperCase();

                console.log(`firstItem ${firstItem}, firstUpper is ${firstUpper} and firstLower ${firstLower} and arrayLeft ${arrayLeft} && checkedItems ${checkedItems}`);
                
                if( (!arrayLeft.includes(firstLower) || !arrayLeft.includes(firstItem)) 
                     && (!checkedItems.includes(firstLower) || !checkedItems.includes(firstItem))
                     && (!arrayLeft.includes(firstUpper) || !checkedItems.includes(firstUpper))
                    ){
                    console.log("finally ",firstItem);
                    
                    return firstItem;
                }
                checkedItems.push(firstItem);
                console.log(checkedItems);
                splitStr = arrayLeft;
                console.log(splitStr);
            }
                        
          
          }
      }


    //  firstNonRepeatingLetter("moonmen");
} 



module.exports = codeWars;