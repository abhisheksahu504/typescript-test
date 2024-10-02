"use strict";
const person1 = ["Harish", 45, true];
const person2 = ["Harshita", 47, false];
// function to display person info
const displayPersonInfo = (person) => {
    const [name, age, isMember] = person;
    console.log(`Hello ${name} your age is ${age} ${isMember ? "Yes" : "No"}`);
};
displayPersonInfo(person1);
displayPersonInfo(person2);
const product1 = ["Mobile", 15000, 5];
const product2 = ["laptop", 25000, 7];
//function to print values
const displayProducts = (product) => {
    const [name, price, quantity] = product;
    console.log(`Price of ${name} is Rs ${price} and quatity is  ${quantity}`);
};
displayProducts(product1);
displayProducts(product2);
