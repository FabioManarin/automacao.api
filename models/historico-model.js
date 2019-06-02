'use strict'

const mongoose = require('mongoose');
const schema = mongoose.Schema;

const historicoModel = new schema({
    usuario: {trim: true, required: true, type: String },
    eletronico: { type: String },
    ativo: { type: Boolean, required: true, default: false },
    dataCriacao: { type: Date, default: Date.now }
}, { versionKey: false });

historicoModel.pre('save', next => {
    let agora = new Date();
    if (!this.dataCriacao) {
        this.dataCriacao = agora;
    }
    next();
});

module.exports = mongoose.model('Historico', historicoModel);