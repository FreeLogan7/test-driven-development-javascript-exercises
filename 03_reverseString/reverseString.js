const reverseString = function(word) {
let reverseword ="";
    for (let i = word.length-1; i >= 0;  i--){
        reverseword += word[i];
    }
    return reverseword;
};

module.exports = reverseString;
