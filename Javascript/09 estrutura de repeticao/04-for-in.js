// for in

let daughter = {
  name: 'Laura',
  age: 3,
  weight: 13.9
}

for(let property in daughter) {
  console.log(property)
  console.log(daughter[property]);
}
