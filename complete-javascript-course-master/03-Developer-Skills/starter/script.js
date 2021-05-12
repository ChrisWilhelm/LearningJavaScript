// Remember, we're gonna use strict mode in all scripts now!
"use strict";
/*
const measureKelvin = function () {
  const measurement = {
    type: "temp",
    unit: "cels",
    value: Number(prompt("Degrees Celsius:")),
  };

  const kelvin = measurement.value + 273;
  return kelvin;
};
console.log(measureKelvin());*/

function printForecast(arr) {
  if (Array.isArray(arr)) {
    let temps = "...";
    for (let i = 0; i < arr.length; i++) {
      temps += ` ${arr[i]}C in ${i + 1} days ...`;
    }
    return temps;
  } else {
    return -1;
  }
}

const arr = [17, 21, 23];
console.log(printForecast(arr));
