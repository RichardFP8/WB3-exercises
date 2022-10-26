"use strict";

let me = new Date("03/23/2003");    //using "/" changes the time zone to standard? This one isn't using local time zone?
let mom = new Date("009 19 1981");  //why does this format and below use Daylight time?
let dad = new Date(1980, 4, 27);

console.log(me + "\n" + mom + "\n" + dad);