const removeFromArray = function(array, ...args) {

    const newArray = [];

    //For each item in the array, copy to a new array
    //if they don't match 'args' values
    array.forEach(item => {

        if(!args.includes(item)){
            newArray.push(item);    
        }
    });
    
    return newArray
   
};

// Do not edit below this line
module.exports = removeFromArray;

//Simpler method: (filter function)
// const removeFromArray = function(array, ...args) {
// return array.filter(val => !args.includes(val))
