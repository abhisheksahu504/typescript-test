//call signature is like annotation to function in typescript
type Student = {
  name: string;
  age: number;
  gender?: string;
  greet: (country: string) => string; //method call signature
};
const student1: Student = {
  name: "Harish",
  age: 22,
  greet: (country): string =>
    `Welcome My name is${student1.name} , I am ${student1.age} yrs old & i am from ${country}`,
};
console.log(student1.greet("India"));
