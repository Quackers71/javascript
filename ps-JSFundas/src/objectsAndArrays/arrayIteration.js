
// Locate the First Match
let carIds = [
    { carId: 123, style: 'saloon' },
    { carId: 456, style: 'convertible' },
    { carId: 789, style: 'saloon' }
];

let car = carIds.find(
    car => car.carId > 500
);

console.log(car);


// Array Testing
/* let carIds = [
    { carId: 123, style: 'saloon' },
    { carId: 456, style: 'convertible' },
    { carId: 789, style: 'saloon' }
];

let result = carIds.every(
    car => car.carId > 0
);

console.log(result); */


// Array Filtering
/* let carIds = [
    { carId: 123, style: 'saloon' },
    { carId: 456, style: 'convertible' },
    { carId: 789, style: 'saloon' }
];

let convertibles = carIds.filter(
    car => car.style === 'convertible'
);

console.log(convertibles); */


// Array Iteration
/* let carIds = [
    { carId: 123, style: 'saloon' },
    { carId: 456, style: 'convertible' },
    { carId: 789, style: 'saloon' }
];

carIds.forEach( car => console.log( car ));

carIds.forEach((car, index) => console.log( car, index )); */