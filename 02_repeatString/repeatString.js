const repeatString = function(string, num) {
    if (num < 0) return "ERROR";
    let repeatedString = "";
    for (let i = 0; i < num; i++){
        repeatedString += string;
    }
    return repeatedString;
};

module.exports = repeatString;
