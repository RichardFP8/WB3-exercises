"use strict";

function displayMailingLabel(name, address, city, state, zip) {
    console.log(name + "\n" + address + ", " + city + ", " + state + ", " + zip);
}
function addNumbers(num1, num2) {
    let sum = num1 + num2;
    console.log(num1 + " + " + num2 + " = " + sum);
}
function displayReceipt(totalDue, amountPaid) {
    let change = amountPaid - totalDue;
    if (change < 0) {
        console.log("Total Due: $" + totalDue + "\nAmount Paid: $" + amountPaid + "\n\nYou need $" + (totalDue - amountPaid) + " more in order to pay the total price");
    }
    
    else {
        console.log("Total Due: $" + totalDue + "\nAmount Paid: $" + amountPaid + "\n\nChange Due: $" + change);
    }
}
// displayMailingLabel("Richard", "234 Long Beach Ave", "Bronx", "NY", "2343");
// displayMailingLabel("Perez", "34 South Road St", "Queens", "LA", 12323);
// addNumbers(4, 34);
// addNumbers(34,65);
// addNumbers(1, 58);
displayReceipt(23.23, 45.42);
displayReceipt(34, 34);
displayReceipt(23.23, 12.34);
