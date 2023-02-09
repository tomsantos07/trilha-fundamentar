// Manipulando Strings e Números

// Transformar um número quebrado com 2 casas decimais e trocar ponto por vírgula

let number = 7.58293406580349286
// Realiza a conversão, porém, dessa forma, o dado vira uma String
console.log(number.toFixed(2).replace(".", ","));

// transformando em number novamente, porém se a string não for do tipo número, gera um NaN
console.log(Number(number.toFixed(2).replace(".", ",")));