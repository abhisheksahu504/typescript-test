"use strict";
// console.log("xyz");
let num = 5;
//* func define
function sum(a, b) {
    return a + b;
}
// console.log(sum(7, 8));
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
// console.log(isEven(a));
// assignment
let isDivisibleBy4and8 = (x) => {
    if (4 % x == 0 && 8 % x == 0) {
        return true;
    }
    else {
        return false;
    }
};
console.log(isDivisibleBy4and8(a));
