let car = { id: 5000, style: 'convertible'};
let id, style;
({ id, style} = car);

console.log(id, style);


/* let car = { id: 5000, style: 'convertible'};
let { id, style} = car;

console.log(id, style); */

// N.B. {} for destructuring objects and
// [] for destructuring arrays
