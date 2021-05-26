


import $ from 'jquery';

let form = document.getElementById('user-form');

form.addEventListener('submit', event => {

    let user = form.elements['user'];
    let avatarFile = form.elements['avater-file'];

    let posting = {
        user: user.value,
        avatarFile: avatarFile.value
    };
    let promise = $.post(
        "https://60aac7ba66f1d0001777334a.mockapi.io/api/v1/JStest", posting
    );
    promise.then(
        data => console.log('data: ', data),
        error => console.log('error: ', error)
    );
    
    event.preventDefault();
});