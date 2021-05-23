
function startCars(...rest){
    console.log(rest);
}

let carCodes = 'abcdefghijklmnopqrstuvwxyz'; // iterable string
startCars(...carCodes);


/*function startCars(car1, car2, car3){
    console.log(car1, car2, car3)
}

let carIds = [100, 300, 500];
startCars(...carIds); */

// while the rest parameter collects elements and stores them in the Arrary
// This Spread Syntax does the opposite and takes the carIds Array and spreads them out in to various parameters