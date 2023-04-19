const express = require('express'); // o express cria um server
const app = express();

app.set("view engine", "ejs"); // view engine === html, ou seja, o ejs será usado para renderizar

app.get("/", function(req, res) {
  res.render("index");
})

app.get("/about", function(req, res) {
  res.render("about");
})

app.listen(8080);
console.log("It's online");