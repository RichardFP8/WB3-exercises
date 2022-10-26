"use strict";
//valid date strings not date objects though
let startDate = "October 26, 2022";
let endDate = "October 27, 2022";

function daysDifference(start, end){
    //convert it to millieseconds
    let x = Date.parse(start);
    let y = Date.parse(end);
    let millie = 1000 * 60 * 60 * 24; // one day's worth of millieseconds: never said something that way

    let difference = y - x; //finding the difference of millieseconds
    let numOfdays = difference / millie;
    return Math.round(numOfdays);
}
let days = daysDifference(startDate, endDate);

console.log("The number of days between: " + startDate + " and " + endDate + " is " + days + " days");