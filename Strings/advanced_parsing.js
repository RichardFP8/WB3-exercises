"use strict";

function parseAndDisplayName(name) {
    name = name.trim();

    //extract first name with substring
    function firstName(name) {
        let x = name.indexOf(" ");
        return name.substring(0, x);

    }
    //extract middle name
    function middleName(name){
        let x = name.indexOf(" ");
        let y = name.lastIndexOf(" ");
        return name.slice(x + 1, y);
    }
    //extract last name after middle name
    function middleLastName(name){
        let x = name.lastIndexOf(" ");
        return name.substring(x + 1);
    }

    //extract last name with slice
    function lastName(name) {
        let x = name.indexOf(" ");
        return name.slice(x + 1);
    }

    //if statement for one name
    if (name.indexOf(" ") == -1) {
        return console.log("Name: " + name + "\nOnly name: " + name);
    }
    //only for one space
    else if (name.indexOf(" ") == name.lastIndexOf(" ")) {
        console.log("Name: " + name +
            "\nFirst name: " + firstName(name) + "\nLast name: " + lastName(name));
    }
    //both spaces have different indexes
    else if(name.indexOf(" ") != name.lastIndexOf(" ")){
        console.log("Name: " + name + "\nFirst Name: " + firstName(name) + "\nMiddle name: " + middleName(name) + "\nLast name: " + middleLastName(name));
    }
}
parseAndDisplayName("Cher");
parseAndDisplayName("Brenda Kaye");
parseAndDisplayName("Dana Lynn Wyatt");
