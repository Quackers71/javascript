
String.prototype.hello = function(){
    console.log(this);
    return this.toString() + ' Hello';
};

console.log('foo'.hello());