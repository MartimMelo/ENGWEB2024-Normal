var express = require('express');
var router = express.Router();
var Contratos = require('../controllers/contratos')

router.get('/', function(req, res, next) {
  if (req.query.entidade) {
    Contratos
      .contratos_entidade(req.query.entidade)
      .then(dados => res.jsonp(dados))
      .catch(erro => res.status(500).jsonp(erro))
  }
  else if(req.query.tipo) {
    Contratos.contratos_tipo(req.query.tipo)
        .then(dados => res.jsonp(dados))
        .catch(erro => res.status(500).jsonp(erro))  
  }
  else {
    Contratos
      .contratos_list()
      .then(dados => res.jsonp(dados))
      .catch(erro => res.status(500).jsonp(erro))
  }
});

router.get('/entidades', function(req, res, next) {
    Contratos
        .contratos_entidades()
        .then(dados => res.jsonp(dados))
        .catch(erro => res.status(500).jsonp(erro))
    }
);

router.get('/tipos', function(req, res, next) {
    Contratos
        .contratos_tipos()
        .then(dados => res.jsonp(dados))
        .catch(erro => res.status(500).jsonp(erro))
    }
);

router.get('/:id', function(req, res, next) {
    Contratos
        .contratos_detail(req.params.id)
        .then(dados => res.jsonp(dados))
        .catch(erro => res.status(500).jsonp(erro))
    }
);

router.post('/', function(req, res, next) {
    console.log(req.body)
    Contratos
        .contrato_post(req.body)
        .then(dados => res.jsonp(dados))
        .catch(erro => res.status(500).jsonp(erro))
    }
);

router.delete('/:id', function(req, res, next) {
    Contratos
        .contrato_delete(req.params.id)
        .then(dados => res.jsonp(dados))
        .catch(erro => res.status(500).jsonp(erro))
    }
);

router.put('/:id', function(req, res, next) {
    Contratos
        .contrato_put(req.params.id, req.body)
        .then(dados => res.jsonp(dados))
        .catch(erro => res.status(500).jsonp(erro))
    }
);

module.exports = router;
