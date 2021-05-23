


let promise = new Promise(
    function(resolve, reject){
        setTimeout(reject, 100, 'someValue'); // previously resolve
    }
);

console.log(promise);