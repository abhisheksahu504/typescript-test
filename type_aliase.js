"use strict";
const products = {
    name: "laptop",
    price: 15000,
    quantity: 6,
};
const calculateTotalCost = (products) => {
    return `${products.name} total cost = ${products.price * products.quantity}`;
};
console.log(calculateTotalCost(products));
