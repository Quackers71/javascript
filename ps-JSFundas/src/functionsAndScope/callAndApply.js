
let o = {
    carId: 123,
    carType: 'Make',
    getId: function(prefix){
        console.log(this);
        return prefix + this.carId + this.carType;
    }
};

let newCar = { carId: 456 , carType: 'BMW' };
let newCar2 = { carId: 789, carType: 'Ford' };
console.log( o.getId.apply(newCar, ['ID: ']) ); // ID: 456BMW
console.log( o.getId.apply(newCar2, ['ID: ']) ); // ID: 789Ford


/* let o = {
    carId: 123,
    getId: function(){
        console.log(this);
        return this.carId;
    }
};

let newCar = { carId: 456 };
console.log( o.getId.call(newCar) ); // 456 */
