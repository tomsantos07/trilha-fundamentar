// callback function

// callback function

// callback é uma função que serve de parâmetro para outra função, por isso, o "name" na linha abaixo deixa de ser um valor simples para ser uma função, pode ser executada inclusive, como ocorre na linha 9
function sayMyName(name) {
  console.log('antes de executar a callback function');

  name()

  console.log('depois da execução');
}

sayMyName(
  () => {
    console.log('estou em uma callback');
  }
)

// chama uma função, que chama outra de volta

// Outra forma

function sayMyNameAgain(name) {
  console.log('antes de executar a callback 2');

  function name() {
    console.log('estou em uma callback 2');
  }

  name()

  console.log('depois da execução 2');
}

sayMyNameAgain()
