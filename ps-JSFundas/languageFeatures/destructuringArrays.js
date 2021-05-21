let carIds = [100, 200, 300, 400, 500, 600, 700];
//let [car1, car2, ...theRest] = carIds;
let car1, car2,theRest
[car1, car2, ...theRest] = carIds;

console.log(car1, car2, theRest);

//let carIds = [1, 2, 5];

/* let remainingCars;
[, ... remainingCars] = carIds;
console.log(remainingCars); */

/* let car1, remainingCars;
[car, ... remainingCars] = carIds;
console.log(car1, remainingCars); */

/* let [car1, car2, car3] = carIds;
console.log(car1, car2, car3); */