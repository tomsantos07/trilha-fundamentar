/*
  new

  * left-hand-side expression
  * é uma expressão que cria um novo objeto
  * let date = new Date('2020-12-01')
console.log(date.__proto__)
*/ 

let name = new String('John')
name.surName = 'Myung'
let age = new Number(56)
console.log(name.surName, age);