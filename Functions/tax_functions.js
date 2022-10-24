"use strict";

function getSocSecTax(grossPay){
    return grossPay * 0.062;
}
function getMedicareTax(grossPay){
    return grossPay *  0.0145 ;
}
function getFederalTax(grossPay, code){
    
    if(code == 0){
        return grossPay * 0.23;
    }
    else if(code == 1){
        return grossPay * 0.21;
    }
    else if(code == 2){
        return grossPay * 0.195;
    }
    else if(code == 3){
        return grossPay * 0.185;
    }
    else if(code == 4){
        return grossPay * 0.18;
    }
    else if(code > 4){
        let x = code - 4;
        return grossPay * (0.18 - (x * 0.005));
    }
    else{
        return "you know how many else ifs I made for- STOP";
    }
}

console.log("$750 gets you $" + getSocSecTax(750) + " in social security then, $" + getMedicareTax(750) + " in medicare and $" + getFederalTax(750, 0) + " in federal");
console.log("$1550 gets you $" + getSocSecTax(1550) + " in social security then, $" + getMedicareTax(1550).toFixed(2) + " in medicare and $" + getFederalTax(1550, 2) + " in federal");
console.log("$1100 gets you $" + getSocSecTax(1100) + " in social security then, $" + getMedicareTax(1100).toFixed(2) + " in medicare and $" + getFederalTax(1100, 6).toFixed(2) + " in federal");


