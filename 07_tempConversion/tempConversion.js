const convertToCelsius = function(value) {

 
  const celsius = ((value - 32 ) * 5/9);

  if (celsius % 1 == 0 || celsius == 0) return celsius;
  else return Number(celsius.toFixed(1));



};

const convertToFahrenheit = function(value) {

  const fahrenheit = ((value * 9/5) + 32);

if (fahrenheit % 1 == 0 || fahrenheit == 0) return fahrenheit;
  return Number(fahrenheit.toFixed(1));

};


// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
