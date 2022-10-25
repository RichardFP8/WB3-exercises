"use strict";

//declare variables
const one = "acme:123-l";
const two = "DI:12345-M";
const three = "ACE:1-12";

//functions

//get supply code
function getSupplier(code) {
    let x = code.indexOf(':');
    return " is supplied by " + (code.substring(0, x)).toUpperCase();
}

function getProductNumber(code) {
    let x = code.indexOf(":");
    let y = code.indexOf("-");
    return " part " + code.substring(x + 1, y);
}

function getSize(code) {
    let x = code.indexOf("-");
    if(code.charAt(x + 1) >= 0) {
        return "the size " + code.substring(x + 1);
    }
    else if(code.charAt(x + 1).toLowerCase() == "m") {
        return "the medium (M)";
    }
    else if(code.charAt(x+1).toLowerCase() == "l"){
        return "the large (L)";
    }
    else{
        return " the size of (" + code.substring(x + 1) + ")";
    }

}
//call each function and display results
//only works forthe exercise inputs
console.log(getSize(one) + getProductNumber(one) + getSupplier(one));
console.log(getSize(two) + getProductNumber(two) + getSupplier(two));
console.log(getSize(three) + getProductNumber(three) + getSupplier(three));