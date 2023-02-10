// for of
// no caso do uso em uma var que recebe uma string, podemos ver o log de letra por letra

let name = 'Gearless Joe'

for(let letter of name) {
  console.log(letter);
}

// no caso de uso do for of em um array, será mostrado cada elemento do array por posição

let dreamTheater = ['Petrucci', 'Myung', 'Portnoy', 'La Brie', 'Rudess']

for(legend of dreamTheater) {
  console.log(legend);
}