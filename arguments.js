"use strict";
//Testing default and optional parameters in typescript
//default argument example
const greet = (name, id = 1) => {
    return `Hello ${name} , your id is ${id}`;
};
console.log(greet("Rajesh"));
//optional argument example
const greet1 = (name, id) => {
    if (id) {
        return `Hello ${name} , your id is ${id}`;
    }
    else {
        return `Hello ${name}`;
    }
};
console.log(greet1("Ramesh"));
