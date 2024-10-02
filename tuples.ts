// Defining tuples
//readonly is used to ristrict any new data formation or deletion using push pop methods
type PersonInfo = readonly [string, number, boolean];
const person1: PersonInfo = ["Harish", 45, true];
const person2: PersonInfo = ["Harshita", 47, false];

// function to display person info
const displayPersonInfo: (person: PersonInfo) => void = (
  person: PersonInfo
): void => {
  const [name, age, isMember] = person;
  console.log(`Hello ${name} your age is ${age} ${isMember ? "Yes" : "No"}`);
};

displayPersonInfo(person1);
displayPersonInfo(person2);

//ecommerce problem

type ProductInfo = [string, number, number];

const product1: ProductInfo = ["Mobile", 15000, 5];
const product2: ProductInfo = ["laptop", 25000, 7];

//function to print values

const displayProducts: (product: ProductInfo) => void = (
  product: ProductInfo
): void => {
  const [name, price, quantity] = product;
  console.log(`Price of ${name} is Rs ${price} and quatity is  ${quantity}`);
};

displayProducts(product1);
displayProducts(product2);
