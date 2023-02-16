/*
Fluxo de caixa familiar
Descrição
Esse desafio envolve a criação de dois arrays e um função que calculará o resultado desses valores, dizendo se é positivo ou negativo, e após isso, o valor do saldo.
Desafio:
Crie um objeto que possuirá 2 propriedades, ambas do tipo array:
    * receitas: [] 
    * despesas: []
Agora, crie uma função que irá calcular o total de receitas e 
despesas e irá mostrar uma mensagem se a família está com 
saldo positivo ou negativo, seguido do valor do saldo.
*/

let familySpent = {
  incomes: [1200, 1000, 650, 500, 350, 400],
  expenses: [900, 61, 450, 120, 60, 457, 300]
}

// soma as receitas
let getAllIncomes = familySpent.incomes;
let incomeSum = 0;

for(let i = 0; i < getAllIncomes.length; i++) {
  incomeSum += getAllIncomes[i]
}
console.log(incomeSum);

//soma as despesas
let getAllExpenses = familySpent.expenses;
let expenseSum = 0;

for(let i = 0; i < getAllExpenses.length; i++) {
  expenseSum += getAllExpenses[i]
}
console.log(expenseSum);

// verifica se o saldo familiar é positivo ou negativo
function familyBalance() {
  let result = incomeSum - expenseSum

  if(result < 0) {
    console.log(`O saldo negativo é de R$${result}`);
  } if(result === 0) {
    console.log(`Os gastos igualam as despesas. R$${result}`);
  } {
    console.log(`O saldo positivo é de R$${result}`);
  }

  return result;
}
familyBalance(incomeSum, expenseSum)