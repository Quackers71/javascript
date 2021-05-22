
function startCar(carID){
    let message = 'Starting...';
    let startFn = function turnKey(){
        let message = 'Override';   
    };
    startFn();
    console.log(message); // 'Starting...'
}
startCar(123);


/* function startCar(carID){
    let message = 'Starting...';
    let startFn = function turnKey(){
        console.log(message); // 'Starting...'
    };
    startFn();
}
startCar(123); */


/* 
function startCar(carId){
    let message = 'Starting...';
}

startCar(123);
console.log(message); // Error: message is not defined 
*/