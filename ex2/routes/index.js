var express = require('express');
var router = express.Router();
var axios = require('axios');

/* GET home page. */
router.get('/', function(req, res, next) {
  axios.get('http://engweb2024-normal-backend-1:16000/contratos')
    .then(dados => {
      res.render('index', { lista: dados.data , title : 'Lista de Contratos'});
    })
    .catch(erro => {
      res.render('error', { error: erro })
    });
});

router.get('/entidades/:nipc', function(req, res, next) {
  axios.get('http://engweb2024-normal-backend-1:16000/contratos?entidade=' + req.params.nipc)
    .then(dados => {
      let preco = 0;
      dados.data.forEach(element => {
        preco += element.precoContratual;
      });
      res.render('entidades', { lista: dados.data , title : req.params.nipc, entidade : dados.data[0].entidade_comunicante, sum : preco});
    })
    .catch(erro => {
      res.render('error', { error: erro })
    });
});

router.get('/:id', function(req, res, next) {
  axios.get('http://engweb2024-normal-backend-1:16000/contratos/' + req.params.id)
    .then(dados => {
      res.render('contrato', { contrato: dados.data });
    })
    .catch(erro => {
      res.render('error', { error: erro })
    });
});


module.exports = router;
