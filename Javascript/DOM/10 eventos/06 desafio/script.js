const openModalButton = document.getElementById('openModal')

// agora precisa pegar a div pela classe
const modalWrapper = document.querySelector('.modal-wrapper')

//agora adiciona evento de click no botão
openModalButton.onclick = function () {
  modalWrapper.classList.remove('invisible')
}
// Por que estou pegando esse erro??
// script.js:8 Uncaught TypeError: Cannot read properties of null (reading 'classList') at openModalButton.onclick (script.js:8:16)
// Erro resolvido: houve um erro de digitação na classe, estava escrito "moda-wrapper" em vez de "moda-wrapper"

// pegando a tecla Esc para fechar a tela novamente

document.addEventListener('keydown', function (event) {
  if (event.key === 'Escape') {
    modalWrapper.classList.add('invisible')
  }
})