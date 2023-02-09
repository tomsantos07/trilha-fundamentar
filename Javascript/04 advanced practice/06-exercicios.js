// 1. Declara uma variável de nome weight
let weight 

// 2. Que tipo de dado é a variável acima?
console.log(typeof weight); // seu type é undefined, segundo o log

// 3. Declare uma variável e atribua valores para cada um dos dados
//    - name: String
//    - age: Number (integer)
//    - stars: Number (float)
//    - isSubscribed: Boolean

let name = 'Gearless Joe'
let age = 24
let stars = 4.5
let isSubscribed = false
// weight = 68


// 4. A variável student abaixo é de que tipo de dado?
let student = {} // seu type é um object
console.log(typeof student);

//   4.1 Atribua à ela as mesmas propriedades e valores do exercício 3
student = {
  name: 'Gearless Joe',
  age: 24,
  weight: 67.5,
  isSubscribed: false
}

//   2.2 Mostre no console a seguinte mensagem:
//     - <name> de idade <age> pesa <weight> kg.
//     - Atenção, substitua <name> e <weight> pelos valores de cada propriedade do objeto.

console.log(`${student.name} de idade ${student.age}, pesa ${student.weight} kg.`);

// 5. Declare uma variável do tipo Array, de nome students e atribua a ela nenhum valor, ou seja, somente o Array vazio

let students = []

// 6. Reatribua o valor para a variável acima, colocando dentro dela o objeto student da questão 4. (Não copiar e coloar o objeto, mas usar o objeto criado e inserí-lo no Array)

students = [student]

console.log(students);

// 7. Coloque no console o valor da posição zero do Array acima
console.log(students[0]);

// 8. Crie um novo student e coloque na posição 1 do Array students

let newStudent = {
  name: 'Urameshi Yusuke',
  age: 14,
  weight: 64.3,
  isSubscribed: true
}

// fontes: 
// https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Array
// https://www.freecodecamp.org/portuguese/news/como-inserir-um-elemento-em-um-array-em-js/#:~:text=Se%20voc%C3%AA%20deseja%20adicionar%20um,usar%20o%20m%C3%A9todo%20concat()%20.
let addStudent = students.splice(1, 0, newStudent)

console.log(students);

// 9. Sem rodar o código, diga qual é a resposta do código e por quê. Após sua resposta, rode o código e veja se você acertou.
    console.log(a)
    var a = 1

// As linhas 63 e 64 geram como resposta um 'undefined' por que a variável foi declarada depois do log e sofreu hoisting do 'var'. Se tivesse sido usado o 'let', daria um reference error, pq o let não gera hoisting

