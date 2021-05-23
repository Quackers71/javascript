


class Car {
    constructor(id){
        this.id = id;
    }
    identify(suffix, carMake){
        return `Car Id: ${this.id} Car Make: ${carMake} ${suffix}`;
    }
}
let car = new Car(123);
console.log( car.identify('!','BMW') ); // 123