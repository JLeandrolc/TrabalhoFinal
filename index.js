var express = require("express");
var app = express();
var { livros } = require("./models");
var { autores } = require("./models");

app.use(express.json());
app.use(express.urlencoded({
  extended: true
}))

app.get("/livros", async function(req, res) {
  var resultado = await livro.findAll();
  res.json(resultado);
});

app.get("/livros/:id", async function(req, res) {
  var resultado = await livro.findByPk(req.params.id);
  res.json(resultado);
});

app.post("/livros", async function(req, res) {
  var resultado = livro.create(req.body);
  res.json(resultado);
});

app.put("/livros/:id", async function(req, res) {
  var resultado = livro.update(req.body, { where: { id: req.params.id } });
  res.json(resultado);
});

app.delete("/livros", async function(req, res) {
  livro.destroy({ where: { id: 1 } });
});

// Rotas Autores

app.get("/autores", async function(req, res) {
  var resultado = await autor.findAll();
  res.json(resultado);
});

app.get("/autores/:id", async function(req, res) {
  var resultado = await autor.findByPk(req.params.id);
  res.json(resultado);
});

app.post("/autores", async function(req, res) {
  var resultado = autor.create(req.body);
  res.json(resultado);
});

app.put("/autores/:id", async function(req, res) {
  var resultado = autor.update(req.body, { where: { id: req.params.id } });
  res.json(resultado);
});

app.delete("/autores", async function(req, res) {
  autor.destroy({ where: { id: 1 } });
});

// Buscam um id especifico do Autor ou Livros

app.get("/livros/:id/autores", async function(req, res) {
  let resultado = await livro.findByPK(req, params.id, { include: 'autores' });
  res.json(resultado.autores);
})

app.get("/autores/:id/livros", async function(req, res) {
  let resultado = await livro.findByPK(req, params.id, { include: 'livros' });
  res.json(resultado.livros);
})

app.listen(3000, function() {
  console.log("Servidor esta funcionando");
});
