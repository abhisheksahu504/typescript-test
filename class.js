"use strict";
//type aliase interface and class are similar to each other
// class Person {
//   name: string = "Ankur";
//   age: number = 45;
//   hobbies: string[] = ["gym", "cricket"];
// }
// const person11: Person = new Person();
class Person {
    name = "Ankur";
    age = 45;
    hobbies = ["gym", "cricket"];
    constructor(name, age, hobbies) {
        this.name = name;
        this.age = age;
        this.hobbies = hobbies;
    }
}
const person11 = new Person("vikram", 19, ["movies", "badminton"]);
// console.log(person11.hobbies);
