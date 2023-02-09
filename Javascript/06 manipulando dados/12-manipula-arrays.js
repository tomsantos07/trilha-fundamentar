let techs = ['html', 'css', 'js']

// adicionar um item no fim
console.log(techs.push('nodejs'));

// adicionar elementos no começo do array
techs.unshift('sql')

// remover item do fim do array
techs.pop()

// remover do começo
techs.shift()

// pegar somente alguns elementos do array (diferente dos outros, não modifica o array)
console.log(techs.slice(1, 3)); // [ 'css', 'js' ]

// remover 1 ou mais items em qualquer posição do array
techs.splice(1, 2)

// encontrar a posição de um elemento no array
let index = techs.indexOf('css')
console.log(index);
