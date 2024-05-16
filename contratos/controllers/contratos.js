const { model } = require('mongoose');
var Contratos = require('../models/contratos');

// Display list of all Contratos.

module.exports.contratos_list = () => {
    return Contratos
        .find()
        .exec();
}

module.exports.contratos_detail = (id) => { 
    return Contratos
        .findById(id)
        .exec();
}

// Display Contratos that have Entidade 

module.exports.contratos_entidade = (entidade) => {
    return Contratos
        .find({ NIPC_entidade_comunicante: entidade })
        .exec();
}

// Display Contratos that have Tipo

module.exports.contratos_tipo = (tipo) => {
    return Contratos
        .find({ tipoprocedimento: tipo })
        .exec();
}

// Display Entidades comunicantes sorted 

module.exports.contratos_entidades = () => {
    return Contratos
        .distinct("entidade_comunicante")
        .sort()
        .exec();
}

// Display Tipo de procedimento sorted

module.exports.contratos_tipos = () => {
    return Contratos
        .distinct("tipoprocedimento")
        .sort()
        .exec();
}

// Add new Contrato

module.exports.contrato_post = (contrato) => {
    if (Contratos.findOne({ _id: contrato._id }).length == 1) {
        return Promise.reject(new Error("Id already exists"))
    }

    var novo = new Contratos(contrato)
    return novo.save()
}

// Delete Contrato

module.exports.contrato_delete = (id) => {
    return Contratos
        .deleteOne({ _id: id })
        .exec()
}

// Put Contrato

module.exports.contrato_put = (id, contrato) => {
    return Contratos
        .updateOne({ _id: id }, contrato)
        .exec()
}
