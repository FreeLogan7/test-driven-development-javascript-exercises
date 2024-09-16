const sumAll = function(start, end) {
    var sumAll =0;
    
    if (start > end) [start, end] = [end, start];
     if (start < 0 || end < 0) return "ERROR";
        if (!Number.isInteger(start) || !Number.isInteger(end) ) return "ERROR";



        for (var i = start; i <= end; i++)
         {
         sumAll += i;
         }

        return sumAll;
}

// Do not edit below this line
module.exports = sumAll;


// Couldn't use this method as it converts string numbers to integer
// var start = Math.min(...args);
// var end = Math.max(...args);
