const convertToCelsius = function(tempF) {

  let tempC=(tempF-32)*(5/9);
  let roundedTempC=Math.round(tempC*10)/10;

  return(roundedTempC);
};

const convertToFahrenheit = function(tempC) {

  let tempF=((tempC*(9/5))+32);
  let roundedTempF=Math.round(tempF*10)/10;

  return(roundedTempF);
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
