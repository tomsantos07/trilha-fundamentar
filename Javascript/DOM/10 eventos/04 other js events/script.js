const h1 = document.querySelector('h1');

h1.addEventListener('click', print)

function print () {
  console.log('print');
}

h1.addEventListener('click', function() {
  console.log('outro momento');
})

// addEventListener empilha as funcionalidades e as executa no documento, caso o onclick ou qualquer funcionalidade on fosse usada no lugar, seria executada somente a última