/*Grouping operator
Descrição
Operador que agrupa expressões, os parênteses.

Na matemática, temos uma noção de precedência, onde certos operadores têm de ser realizados primeiro, e não é diferente para um computador, porém, podemos utilizar os parênteses para realizar o agrupamento de alguns operadores, que moverá a precedência do cálculo.
*/

let total = 2 + 3 * 5
console.log(total)
//com essa precedência, nosso resultado é 17.

let otherTotal = (2 + 3) * 5
console.log(otherTotal)
// o cálculo mudou a precedência, fazendo nosso resultado tornar-se 25.