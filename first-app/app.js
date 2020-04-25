
function sayHello(name) {
    console.log('Hello '+name);
}

sayHello('Q')
//console.log(window);

//console.log(); # global object

setTimeout(1); // call a function after a delay
clearTimeout();
setInterval(1);  
clearInterval(1);

//let message = 'Hello World!';
//console.log(global.message); // Uncaught ReferenceError: global is not defined
