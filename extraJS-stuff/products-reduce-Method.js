var products = [
  { name: "Grapefruit", calories: 170, color: "red", sold: 8200 },
  { name: "Orange", calories: 160, color: "orange", sold: 12101 },
  { name: "Cola", calories: 210, color: "caramel", sold: 25412 },
  { name: "Diet Cola", calories: 0, color: "caramel", sold: 43922 },
  { name: "Lemon", calories: 200, color: "clear", sold: 14983 },
  { name: "Raspberry", calories: 180, color: "pink", sold: 9427 },
  { name: "Root Beer", calories: 200, color: "caramel", sold: 9909 },
  { name: "Water", calories: 0, color: "clear", sold: 62123 },
];

// running through some JS Array Methods taken from https://www.youtube.com/watch?v=R8rmfD9Y5-c

// The reduce() method executes a user-supplied "reducer" callback
// function on each element of the array, in order, passing in the
// return value from the calculation on the preceding element. The
// final result of running the reducer across all elements of the
// array is a single value.

const total = products.reduce((currentTotal, product) => {
  return product.sold + currentTotal;
}, 0);

console.log("The products array");
console.table(products);

console.log("The sum of products sold : " + total.toLocaleString());
