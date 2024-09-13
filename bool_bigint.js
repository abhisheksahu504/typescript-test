"use strict";
// two ways of declaring a bigint number
let bigNumber = 4561235455415662n;
let anotherBigNumber = BigInt("3695364354363455");
console.log(bigNumber, anotherBigNumber);
let sum1 = bigNumber + anotherBigNumber;
let minus = bigNumber - anotherBigNumber;
let multiply = bigNumber * anotherBigNumber;
let division = bigNumber / anotherBigNumber;
console.log(sum1, minus, multiply, division);
