function Duck(sound) {
    this.sound = sound;
    this.quack = function() {console.log(this.sound);}
   }

var toy = new Duck("quack quack");

// The toy acts like an Object... So we can call it's Method
toy.quack(); // quack quack

console.log(typeof toy); // object
console.log(toy instanceof Duck); // true
