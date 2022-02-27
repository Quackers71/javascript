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

// The every() method tests whether all elements in the array pass the test implemented by the provided function.

var value = 215;
const hasInexpensiveProducts = products.every((product) => {
  return product.calories <= value;
});

console.log("The products array");
console.table(products);

console.log(
  "Are any of the calories, less than " + value + " : " + hasInexpensiveProducts
);
