//map and filter methods in array

const arr_numbers: number[] = [1, 2, 3, 4, 5];
const nam: string[] = ["Alice", "Bob", "Anna", "Andy", "Alex"];

// Doubling in array
const doubleData: number[] = arr_numbers.map((curVal: number) => curVal * 2);
console.log(doubleData);

//Uppercase problem
const upperCase: string[] = nam.map((str: string) => str.toUpperCase());
console.log(upperCase, nam);

//square problem
const square: number[] = arr_numbers.map((num) => num * num);
console.log(square);

//fliter problems

//length greater than 4 problem
const length2: string[] = nam.filter((str) => str.length > 4);
console.log(length2);
//starts with A problem
const startWithA: string[] = nam.filter((str) => str.startsWith("A"));
console.log(startWithA);
