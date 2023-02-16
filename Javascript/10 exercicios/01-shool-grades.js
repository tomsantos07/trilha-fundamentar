// # Trasnformar notas escolares

// Crie um algoritmo que transforme as notas do sistema numérico para sistema de notas em caracteres tipo A B C

/*
  - de 90 para cima - A
  - entre 80 e 89   - B
  - entre 70 e 79   - C
  - entre 60 e 69   - D
  - menor que 60    - F
  */

// let grade;

function showGrade(grade) {
  let exibit;
  if(grade >= 90) {
    console.log('A');
  } else if(grade >= 80 && grade <= 89) {
    console.log('B');
  } else if(grade >= 70 && grade <= 79) {
    console.log('C');
  } else if(grade >= 60 && grade <= 69) {
    console.log('D');
  } else {
    console.log('F');
  }
}

console.log(showGrade(58));
