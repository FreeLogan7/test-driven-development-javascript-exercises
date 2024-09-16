const sumAll = function(...args) {
    var sumAll =0;
    var start = Math.min(...args);
    var end = Math.max(...args);

   if (start < 0) return "ERROR";
   if (!Number.isInteger(start) || !Number.isInteger(end) ) return "ERROR";



    for (var i = start; i <= end; i++)
         {
         sumAll += i;
         }

return sumAll;
}

// Do not edit below this line
module.exports = sumAll;
