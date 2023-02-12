/*
Celsius to Fahrenheit
Descrição
Nesse desafio faremos uma função que vai receber uma string em Celsius ou Fahrenheit, e fazer a transformação de uma unidade para a outra.

Desafio:

Crie uma função que receba uma string em celsius ou fahrenheit
e faça a transformação de uma unidade para outra 
    C = (F - 32) * 5/9 
    F = C * 9/5 + 32
*/

// let celsius = '26';
// let fahrenheit = '180';

function convertTemp(celsius, farenheit) {
  Number(celsius, farenheit)

  if(celsius) {
    let F = celsius * 9/5 + 32;
    console.log(`A temperatura é ${F} Farenheit`);
  } else {
    let C = (farenheit - 32) * 5/9;
    console.log(`A temperatura é ${C.toFixed(1)} graus Celsius`);
  }

}

console.log(convertTemp(false, '180'));
console.log(convertTemp('26', false));