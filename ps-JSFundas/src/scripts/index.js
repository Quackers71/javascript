

//import $ from 'jQuery';
import $ from '../../node_modules/jquery';

let promise = $.get("https://60aac7ba66f1d0001777334a.mockapi.io/api/v1/:endpoint");
promise.then(    
    data => console.log('data: ', data),
    error => console.log('error: ', error)
);


// import specified to run:
// npm i --save-dev @types/jquery
// *** Needs Work! ***