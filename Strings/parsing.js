"use strict";

//main function holds two inner functions and displays name
function parseAndDisplayName(name){

    //extract first name with substring
    function firstName(name){
        let x = name.indexOf(" ");
        return name.substring(0, x);
    
    }
    //extract last name with slice
    function lastName(name){
        let x = name.indexOf(" ");
        return name.slice(x + 1);
    }
    
    console.log("Name: " + name + 
    "\nFirst name: " + firstName(name) + "\nLast name: " + lastName(name));
}

parseAndDisplayName("Brenda Kaye");
parseAndDisplayName("Ian Auston");
parseAndDisplayName("Siddalee Grace");
