const element = document.querySelector('h1')
// console.log(element);
element.textContent = 'Hello, world!'

const element2 = document.querySelector('h2')
element2.innerHTML = 'Hello, everybody <small>!!!</small>'

const element3 = document.querySelector('input')
element3.value = 'outro valor'

// Manipulação de atributos

const header = document.querySelector('header')
// adiciona o id header
header.setAttribute('id', 'header')


const headerID = document.querySelector('#header')
console.log(headerID);

// pega somente o atributo
console.log(headerID.getAttribute('class'));

header.removeAttribute('id')

header.setAttribute('class', 'bg header')