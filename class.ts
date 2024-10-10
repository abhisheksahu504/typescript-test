//type aliase interface and class are similar to each other

// class Person {
//   name: string = "Ankur";
//   age: number = 45;
//   hobbies: string[] = ["gym", "cricket"];
// }
// const person11: Person = new Person();

class Person {
  name: string = "Ankur";
  age: number = 45;
  hobbies: string[] = ["gym", "cricket"];

  constructor(name: string, age: number, hobbies: string[]) {
    this.name = name;
    this.age = age;
    this.hobbies = hobbies;
  }
}
const person11: Person = new Person("vikram", 19, ["movies", "badminton"]);
// console.log(person11.hobbies);
