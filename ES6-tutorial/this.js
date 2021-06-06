


"use strict";
const person = {
    name: "Rob",
    walk() {
      console.log(this);
    }
  };
  
  person.walk();
  
  const walk = person.walk;
  //console.log(walk);
  
  walk(); // undefined