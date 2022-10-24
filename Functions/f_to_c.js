"use strict";

function convertFtoC(x){
    return (5/9) * (x - 32);
}

let currentTemp = -40;
let celsiusTemp = convertFtoC(currentTemp);

console.log( currentTemp + " in Fahrenheit is " + celsiusTemp + " in Celsius");