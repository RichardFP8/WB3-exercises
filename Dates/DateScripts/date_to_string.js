"use strict";

let date = new Date(); // current time from browser

console.log("Current time: " + date + 
"\nWith toString():" + date.toString()+ 
"\nWith toDateString(): " + date.toDateString()+ 
"\nWith toUTCString(): " + date.toUTCString()+ 
"\nWith toLocaleString(): " + date.toLocaleString());