"use strict";
console.log("xyz");
let num = 5;
//* func define
function sum(a, b) {
    return a + b;
}
console.log(sum(7, 8));
let nanvalue = NaN;
let a = 8;
let isEven = (a) => {
    if (a % 2 == 0) {
        return true;
    }
    else {
        return false;
    }
};
console.log(isEven(a));
