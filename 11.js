function pickPeaks(arr){
  
    //lets loop the array to compare i, i+1, i+2, while i+2 exists
    var arrPos = [], arrPeak = [];
    var Obj = {
        pos:arrPos,
        peaks:arrPeak
    }

    for(var i=0; i<arr.length; i++){

        // console.log(typeof arr[i+2]);


       while((typeof arr[i+3]) === "number"){
            if(arr[i+1]> arr[i] && arr[i+1]>arr[i+2]){ 
                arrPos.push(i+1);
                arrPeak.push(arr[i+1]);
            } 

            
            if(arr[i] === arr[i+1] && arr[i+1] === arr[i+2]){

                console.log("hello");
                if((arr[i]>arr[i-1]) && (arr[i+2]>arr[i+3])){
                    console.log("hi");
                    arrPos.push(i);
                    arrPeak.push(arr[i]);

                }

            }

            // console.log("Iam here", i);
                i++;
       }

    
       

    }
    console.log("I am the pos: ", arrPos, ". I am the peak ", arrPeak);  
     return Obj;
  }


  pickPeaks([3,2,3,6,4,1,2,3,2,2,2,1,2,3]);