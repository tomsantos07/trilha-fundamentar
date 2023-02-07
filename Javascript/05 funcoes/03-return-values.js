// if there isnt any 'return' inside de func, it will be automatically 'undef'

let total = 0;

const sum = function(numberA, numberB) {
  let total = (numberA + numberB);
  return total
  }
  
  let numberA = 22
  let numberB = 35

  console.log(`A soma é ${sum(numberA, numberB)}`);