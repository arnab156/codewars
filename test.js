
// Write a function

// tripledouble(num1,num2)
// which takes numbers num1 and num2 and returns 1 if there is a straight triple of a number at any place in num1 and also a straight double of the same number in num2.

// If this isn't the case, return 0

// Examples 
// tripledouble(451999277, 41177722899) == 1 // num1 has straight triple 999s and 
//                                           // num2 has straight double 99s

// tripledouble(1222345, 12345) == 0 // num1 has straight triple 2s but num2 has only a single 2

// tripledouble(12345, 12345) == 0

// tripledouble(666789, 12345667) == 1



function tripledouble(num1, num2) {
    //code me
    var checkpoint1 = 0;
    var checkpoint2 = 0;
    var Arr1 = [];
    var n1 = "";
    //Loop the num 1
    var n1 = num1.toString();
    console.log(n1);
    for(var i=0;i<n1.length; i++){
    //check charAt(i) and (i+1) 
   
    
      if (n1.charAt(i) == n1.charAt(i+1)){
       //if true --> check char(i+1) & n(i+2) are same
         if (n1.charAt(i+1) == n1.charAt(i+2)){
             console.log("i am inside nested loop in 16 : ",n1.charAt(i)," ",n1.charAt(i+1)," " , n1.charAt(i+2));
            Arr1.push(n1.charAt(i)); 
           checkpoint1 = 1;  //if true checkpoint1 = 1;
         } 
      }
       
    } //end of loop 1
    
    //Loop the num 2

     var n2 = num2.toString();
    for(var i=0;i<n2.length; i++){
    //check charAt(i) and (i+1) 
      if (n2.charAt(i) == n2.charAt(i+1)){
       //if true --> check char(i+1) & n(i+2) are same

       //loop at char n2 in Arr1
       for(var j =0; j<Arr1.length; j++){

        if (Arr1[j] == n2.charAt(i)){
            console.log("i am inside nested loop in 32 : ",n2.charAt(i)," ",n2.charAt(i+1)," " , n2.charAt(i+2));
             
            checkpoint2 =1;  //if true checkpoint1 = 1;
        }
       }
     
            
         
      }
       
    } //end of loop 2
    
    
    if(checkpoint1 == 1 && checkpoint2 == 1){
        
        console.log("true");
      return 1;
      } else {
        console.log("false");
      return 0;
      }
    
  }



  tripledouble(223112245777, 1234377);
