


import $ from 'jquery';
let user = {
    name: 'Evil Kinevil',
    avatar: 'yo.jpg'
};
let promise = $.post(
    "https://60aac7ba66f1d0001777334a.mockapi.io/api/v1/JStest", user
);
promise.then(
    data => console.log('data: ', data),
    error => console.log('error: ', error)
);