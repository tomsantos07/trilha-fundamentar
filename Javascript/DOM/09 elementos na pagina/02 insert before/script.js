const div = document.createElement('div')
div.innerText = 'Hello, world!'

// insertBefore
// const body = document.querySelector('body')
// const script = document.querySelector('script')
// body.insertBefore(div, script)

// como fazer insertAfter

const body = document.querySelector('body')
const header = document.querySelector('header')
body.insertBefore(div, header.nextSibling)
