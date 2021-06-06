// var -> function
// let -> block
// const -> block


const x = 1;
x = 2; // TypeError: Assignment to constant variable.


function sayHello(){
    for (var i=0; i < 5; i++){
        console.log(i);
    }

    console.log(i);
}

sayHello(); // 0 1 2 3 4  5


function sayHello(){
    for (let i=0; i < 5; i++){
        console.log(i);
    }

    console.log(i);
}

sayHello(); // ReferenceError: i is not defined