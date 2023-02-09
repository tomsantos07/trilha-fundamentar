/*  Expressões e Operadores
    - Expressions
    - Operators
      Binary
      Unary
      Ternary
*/

// IMPORTANTE: no caso abaixo, a função é autoexecutável e ainda, se não houver a vírgula após o 1 na linha 14, haverá um TypeError, pois o js entende que número 1 seja executado, passe function como argumento e recebe de volta outra function, da seguinte forma: 
// let number = 1(function() {
//   console.log('alo');
// })()

let number = 1;

(function() {
  console.log('alo');
})()

// binary operator
console.log(number + 1);

// binary operator
console.log(++number);

// ternary
console.log(true ? 'hello world' : 'nada');