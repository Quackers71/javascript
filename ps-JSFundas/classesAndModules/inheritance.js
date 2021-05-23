


class Vehicle {
    constructor(){
        this.type = 'car';
    }
    start(){
        return `Starting: ${this.type}`;
    }
}

class Car extends Vehicle {
    constructor(){
        super(); // this is a special Constructor which calls
                 // the Constructor from the Vehicle Class
    }
    start(){
        return 'in Car start - ' + super.start(); 
        // using super() lets you access the Vehicle (base) class
    }

}
let car = new Car();
console.log( car.type ); // car
console.log( car.start() ); // in Car start - Starting: car