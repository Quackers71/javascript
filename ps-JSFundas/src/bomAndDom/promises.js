


let promise = new Promise(
    function(resolve, reject){
        setTimeout(resolve, 100, 'someValue');
    }
);
