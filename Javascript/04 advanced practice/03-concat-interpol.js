// Concatenando e interpolando variáveis
// Descrição
// É possível concatenar strings com o operador +, por exemplo: console.log('o ' + name + ' tem ' + age + ' anos.') desta maneira as variáveis serão convertidas em texto e o que será mostrado será um texto com o nome e a idade que foram estabelecidas no código. 
// Uma outra maneira de escrever um texto com variáveis é por meio da interpolação com template literals, usando crase para o texto e ${} para denotar uma variável, por exemplo console.log(O ${name} tem ${age} anos.) o resultado deste comando será o mesmo texto do anterior.

let name, age, isHuman

myName = "John"
age = 18
isHuman = true

console.log(`O ${myName} tem atualmente ${age} anos de idade.`);
