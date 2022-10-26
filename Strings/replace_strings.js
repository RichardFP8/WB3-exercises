"use strict";

//find the string
let message = "Our corporate offices are located in Dallas";
let change = message.replace("Dallas", "Austin");

 console.log(message + "\n" + change);
//using regular expressions("/") and searching globally("g") with case-insensitve("i")
let global = "Our corporate offices are located in dallas, DALLAS, dallas, Dallas";
let match = global.match(/DALLAS/gi);
console.log("Just using match()" + match);

//find the regular expression;
let replaceGlobal = message.replace(/Dallas/g, "Austin");
console.log("Using regular expressions with replace() " + replaceGlobal);

/* match() won't work as an input for the replace() because match() returns an array 
while replace() requires a string or regular expression, FAILED ATTEMPT*/


// let d = new Date();
// console.log(d.toUTCString());
// console.log(d.toString());
// console.log(d.toDateString());

// console.log(d.toLocaleDateString());
// console.log(d.toLocaleTimeString());
// console.log(d.toLocaleString());

// let date = new Date(1903, 4, 23);
// let test = new Date("2021-06-10T12:03:34");
// console.log(date);
// console.log(test);