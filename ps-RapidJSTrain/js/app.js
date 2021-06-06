


var defaultSettings = {
    who: 'default'
};
var userSettings;
var value = userSettings || defaultSettings;
console.log(value); // Object {who: "default"}


var defaultSettings = {
    who: 'default'
};
var userSettings = {
    who: 'user'
};
var value = userSettings || defaultSettings;
console.log(value); // Object {who: "user"}