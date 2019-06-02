'use strict'

const repository = require('../repositories/historico-repository');
const ctrlBase = require('../bin/base/controller-base');
const validation = require('../bin/helpers/validation');
const _repo = new repository();

function historicoController() {

}

historicoController.prototype.post = async (req, res) => {
    let _validationContract = new validation();
    ctrlBase.post(_repo, _validationContract, req, res);
};

historicoController.prototype.put = async (req, res) => {
    let _validationContract = new validation();
    ctrlBase.put(_repo, _validationContract, req, res);
};

historicoController.prototype.get = async (req, res) => {
    ctrlBase.get(_repo, req, res);
};

historicoController.prototype.getById = async (req, res) => {
    ctrlBase.getById(_repo, req, res);
};

historicoController.prototype.delete = async (req, res) => {
    ctrlBase.delete(_repo, req, res);
};

module.exports = historicoController;