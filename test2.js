// Description:
// Given an array (arr) as an argument complete the function countSmileys that should return the total number of smiling faces.
// Rules for a smiling face:
// -Each smiley face must contain a valid pair of eyes. Eyes can be marked as : or ;
// -A smiley face can have a nose but it does not have to. Valid characters for a nose are - or ~
// -Every smiling face must have a smiling mouth that should be marked with either ) or D.
// No additional characters are allowed except for those mentioned.
// Valid smiley face examples:
// :) :D ;-D :~)
// Invalid smiley faces:
// ;( :> :} :] 

function countSmileys(arr) {

    var valid = 0;
    var string = '';

    // loop in the array first
    for (var i = 0; i <arr.length; i++){
        string = arr[i];
        if (string.charAt(0) == ':' || string.charAt(0) == ';'){
            console.log("first char is correct");
            // check for second character
            if (string.charAt(1) == '-' || string.charAt(1) == '~' || string.charAt(1) == ')' || string.charAt(1) === 'D'){
                //second one is matching
                console.log("second one is matching");
                if(string.charAt(1) == ')' || string.charAt(1) === 'D'){
                    valid++;
                }

                if(string.charAt(2)){

                    if(string.charAt(2) == ')' || string.charAt(2) === 'D'){
                        valid++
                    }



                }



            }
        }
    }
    return valid;
}

countSmileys([':D',':~)',';~D',':)']);

