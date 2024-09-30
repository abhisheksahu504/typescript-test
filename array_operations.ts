//push and pop methods in array
const fruits: string[] = ["mango", "orange", "apple", "banana"];
const newUpdatedFruits = fruits.push("Kiwi");
console.log(newUpdatedFruits); //new variable give no of elemnts in the array so to get output we have to use initial name only(fruits)
const lastData = fruits.pop();
console.log(lastData); //this gives the elemet that is popping out i.e Kiwi

//iterating over array
fruits.forEach((curVal: String) => console.log(curVal));
