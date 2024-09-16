// console.log("xyz");
let num: number = 5;

//* func define
function sum(a: number, b: number): number {
  return a + b;
}

// console.log(sum(7, 8));
let nanvalue: number = NaN;
let a: number = 8;
let isEven = (a: number): boolean => {
  if (a % 2 == 0) {
    return true;
  } else {
    return false;
  }
};
// console.log(isEven(a));

// assignment
let isDivisibleBy4and8 = (x: number) => {
  if (4 % x == 0 && 8 % x == 0) {
    return true;
  } else {
    return false;
  }
};
console.log(isDivisibleBy4and8(a));
