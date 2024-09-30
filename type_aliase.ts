//you can define a type for object to avoid repetition
type product = {
  name: string;
  price: number;
  quantity: number;
};
const products: product = {
  name: "laptop",
  price: 15000,
  quantity: 6,
};
const calculateTotalCost = (products: product) => {
  return `${products.name} total cost = ${products.price * products.quantity}`;
};
console.log(calculateTotalCost(products));
