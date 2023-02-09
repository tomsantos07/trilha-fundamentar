// função de expressão não sofre elevação
//  Ex: sayMyName()
// const sayMyName = function() {
//   console.log('Charles');
// } o retorno dessa function é 'undef'

// Já o exemplo baixo sofre elevação 
sayMyName()

function sayMyName() {
  console.log('Charles');
}