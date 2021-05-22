
let o = {
    carId: 123,
    getId: function(){
        console.log(this);
        return this.carId;
    }
};
console.log( o.getId() ); // 123



/* let fn = function(){
    console.log(this === window);
};

fn(); // true 
*/