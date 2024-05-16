var express = require('express');
var path = require('path');
var logger = require('morgan');
var mongoose = require("mongoose");

var mongoDB = "mongodb://127.0.0.1/contratos";
mongoose.connect(mongoDB);
var db = mongoose.connection;
db.on("error", console.error.bind(console, "Erro de conexão ao MongoDB"));
db.once("open", () => {
  console.log("Conexão ao MongoDB realizada com sucesso");
});

var contratosRouter = require('./routes/contratos');

var app = express();

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', contratosRouter);

module.exports = app;