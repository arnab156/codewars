const reverseString = str => {

    var strRev = str
    .toLowerCase()
    .split('')
    .reverse()
    .join('');
    return(strRev);
}

module.exports = reverseString;

// reverseString("arnab");
