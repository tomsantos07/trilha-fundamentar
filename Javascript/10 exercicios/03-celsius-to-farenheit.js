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
/*
function convertTemp(celsius, farenheit) {
  Number(celsius, fahrenheit)

  if(celsius) {
    let F = celsius * 9/5 + 32;
    console.log(`A temperatura é ${F} Fahrenheit`);
  } else {
    let C = (fahrenheit - 32) * 5/9;
    console.log(`A temperatura é ${C.toFixed(1)} graus Celsius`);
  }

}

console.log(convertTemp(false, '180'));
console.log(convertTemp('26', false));
*/

// construir uma função que faça a conversão de temperatura 
function convertDegrees(degree) {
  const celsiusExists = degree.toUpperCase().includes('C')
  const fahrenheitExists = degree.toUpperCase().includes('F')

  // fluxo de erro
  if (!celsiusExists && !fahrenheitExists) {
    throw new Error('Grau não identificado')
  }

  // fluxo ideal: fahrenheit to celsius
  let updatedDegree = Number(degree.toUpperCase().replace("F", ""));
  let formula = fahrenheit => (fahrenheit - 32) * 5 / 9
  let degreeSign = 'C'

  // fluxo alternativo: Celsius to Fahrenheit
  if (celsiusExists) {
    updatedDegree = Number(degree.toUpperCase().replace("C", ""));
    formula = celsius => celsius * 9/5 + 32
    degreeSign = 'F'
  }

  return formula(updatedDegree) + degreeSign
}
try {
  console.log(convertDegrees('10C'))
  console.log(convertDegrees('50F'))
} catch (error) {
  console.log(error.message);
}

