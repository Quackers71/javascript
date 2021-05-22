
// Methods
function Car(id){
    this.carId = id;
    this.start = function(){
        console.log(this);
        console.log('start: ' + this.carId);
    };
}
let vehicle = new Car(123);
vehicle.start(); // start: 123


// 'this' Keyword in a Constructor Function
/* function Car(id){
    this.carId = id;
    console.log(this);
}
let car = new Car(123);
console.log( car.carId ); // 123 
*/


/* function Car(){
    console.log(this);
}
let vehicle = new Car(); */