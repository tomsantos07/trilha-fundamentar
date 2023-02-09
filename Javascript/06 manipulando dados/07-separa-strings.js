// Manipulando strings e números

// Separe um texto que contém espaços, em um novo array onde cada texto é uma posição do array. Depois disso, transforme o array em um texto e onde eram espaços, coloque _

let sentence = "I am the Eggman, I am the Walrus"

let myArray = sentence.split(" ")

console.log(myArray);

let sentenceWithUnderscore = myArray.join("_")
