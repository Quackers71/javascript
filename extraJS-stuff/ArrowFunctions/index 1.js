// JS Arrow Functions taken from https://youtu.be/h33Srr5J9nY

// In this example, using the Arrow function it provides a
// Global Scope compared to the Standard function

class Person {
  constructor(name) {
    this.name = name;
  }

  printNameArrow() {
    setTimeout(() => {
      console.log("Arrow: " + this.name);
    }, 100);
  }

  printNameFunction() {
    setTimeout(function () {
      console.log("Function: " + this.name);
    }, 100);
  }
}

let person = new Person("Bob");
person.printNameArrow();
person.printNameFunction();
