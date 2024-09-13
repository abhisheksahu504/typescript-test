// two ways of declaring a bigint number
let bigNumber: bigint = 4561235455415662n;
let anotherBigNumber = BigInt("3695364354363455");
console.log(bigNumber, anotherBigNumber);
let sum1: bigint = bigNumber + anotherBigNumber;
let minus = bigNumber - anotherBigNumber;
let multiply: bigint = bigNumber * anotherBigNumber;
let division: bigint = bigNumber / anotherBigNumber;
console.log(sum1, minus, multiply, division);
