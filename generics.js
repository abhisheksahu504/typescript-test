"use strict";
// generics in typerscript
// in generics we don't neccessarily define the types
function add(a) {
    console.log(a);
}
add(5);
//multiple value and type
function add2(a, b) {
    console.log(`${a},${b}`);
}
add2(5, "abcd");
//multiple value and multiple type and simple also
function add3(a, b, c) {
    console.log(`${a},${b},${c}`);
}
add3(5, "abcd", true);
