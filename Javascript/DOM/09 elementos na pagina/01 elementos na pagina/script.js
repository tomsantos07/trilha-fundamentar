// create Element
const div = document.createElement('div');
div.innerText = "Hello, world!"

const div2 = document.createElement('div');
div2.innerText = "That's all, folks!";

// apprend / prepend

const body = document.querySelector('body');
body.prepend(div);
body.appendChild(div2);



