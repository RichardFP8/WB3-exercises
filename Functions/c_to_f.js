"use strict";

function convertCtoF(x){
    const convert = ((9/5) * x) + 32;
    console.log(x + " in Celsius is: " + convert + " in Fahrenheit");
}

convertCtoF(10);
convertCtoF(45);
convertCtoF(19);
convertCtoF(0);
convertCtoF(-7);
convertCtoF(-40);