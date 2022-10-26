"use strict";

//assign the event
window.onload = init;

function init(){
    const convertStringBtn = document.getElementById("convertToString");
    const dateFormatBtn = document.getElementById("convertToDate");

    convertStringBtn.onclick = convertToString;
    dateFormatBtn.onclick = dateFormat;
}
//function to convert the date into a string; this is off by 1(I don't know what unit)
function convertToString(){
    const returnDate = document.getElementById("displayString");
    let date = document.getElementById("dateString").value;
    let toString = new Date(date);
    returnDate.innerHTML = `Date, Time, Time Zone, all that:<br>${toString}`;

}
//convert the string into date format using toString()

function dateFormat(){
    const returnDate = document.getElementById("displayDate");
    let date = document.getElementById("dateOnly").value;
    let toDate = date.toString();
    returnDate.innerHTML = `In short date: ${toDate}`;
}

//Honestly, I still don't understand MOST of this