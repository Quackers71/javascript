function SoundEffect(sound) {
    this.sound = sound;
    this.effect = function() {console.log(this.sound);}
   }

var duck = new SoundEffect("quack quack");
var dog = new SoundEffect("woof woof");
var cat = new SoundEffect("Meeoow");

duck.effect(); // quack quack
dog.effect(); // woof woof
cat.effect(); // Meeoow

console.log(typeof duck); // object
console.log(dog instanceof SoundEffect); // true
