/*
Function() constructor

* expressão new
* criar um novo objeto
* this keyword
*/

function Person(name) {
  this.name = name
  this.walk = function() {
    return this.name + " is walking"
  }
}

const dean = new Person("Dean")
const sam = new Person("Sam")
console.log(dean.walk());
console.log(sam.walk());
