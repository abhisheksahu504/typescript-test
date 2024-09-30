"use strict";
//map and filter methods in array
const arr_numbers = [1, 2, 3, 4, 5];
const nam = ["Alice", "Bob", "Anna", "Andy", "Alex"];
// Doubling in array
const doubleData = arr_numbers.map((curVal) => curVal * 2);
console.log(doubleData);
//Uppercase problem
const upperCase = nam.map((str) => str.toUpperCase());
console.log(upperCase, nam);
//square problem
const square = arr_numbers.map((num) => num * num);
console.log(square);
//fliter problems
//length greater than 4 problem
const length2 = nam.filter((str) => str.length > 4);
console.log(length2);
//starts with A problem
const startWithA = nam.filter((str) => str.startsWith("A"));
console.log(startWithA);
