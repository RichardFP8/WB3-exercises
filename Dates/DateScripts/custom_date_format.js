"use strict";

let date = new Date();

let year = date.getFullYear();
let dayNumber = date.getDate();
//using an array to find the name of the month from the getMonth output 
const month = ["January", "February", "March", "April",
"May", "June", "July", "August", "September",
"October", "November", "December"];
let monthName = month[date.getMonth()];

//getting the day value from ouput of getDay; keep in mind zero-base(more to learn about);
const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", 
"Friday", "Saturday"];
let dayName = days[date.getDay()];

let fullDay = `${dayNumber}-${monthName}-${year}(${dayName})`;
console.log(fullDay);