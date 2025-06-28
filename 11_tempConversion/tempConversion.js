const convertToCelsius = function (temparature) {
  return Math.round(((temparature - 32) * 5 / 9) * 10) / 10;
};

const convertToFahrenheit = function (temparature) {
  return Math.round(((temparature * 9 / 5) + 32) * 10) / 10;
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
