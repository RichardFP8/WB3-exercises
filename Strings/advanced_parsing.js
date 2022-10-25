"use strict";
function parseAndDisplayName(name) {
    //why not use trim? 
    name = name.trim();
    let x = name.indexOf(" ");
    let y = name.lastIndexOf(" ");
    //extract first name with substring
    function firstName(name) {
        return name.substring(0, x);
    }
    //extract middle name
    function middleName(name) {
        return name.slice(x + 1, y);
    }
    //extract last name after middle name
    function middleLastName(name) {
        return name.substring(y + 1);
    }
    //extract last name with slice
    function lastName(name) {
        return name.slice(x + 1);
    }
    //if statement for one name
    if (x == -1) {
        console.log("Name: " + name + "\nOnly name: " + name);
    }
    //only for one space
    else if (x == y) {
        console.log("Name: " + name +
            "\nFirst name: " + firstName(name) + "\nLast name: " + lastName(name));
    }
    //both spaces have different indexes
    else if (x != y) {
        console.log("Name: " + name + "\nFirst Name: " + firstName(name) + "\nMiddle name: " + middleName(name) + "\nLast name: " + middleLastName(name));
    }
}
parseAndDisplayName("Cher");
parseAndDisplayName("Brenda Kaye");
parseAndDisplayName("Dana Lynn Wyatt");