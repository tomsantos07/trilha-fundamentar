const element = document.querySelector('body')

element.classList.add('active', 'green')
// caso queira remover
element.classList.remove('active')

// toggle funciona como um tipo de interruptor: se a classe existir, ele a remove. Se não exisitir, adiciona.
element.classList.remove('active')
element.classList.toggle('active')