'use strict'

require('../models/historico-model');
const base = require('../bin/base/repository-base');

class historicoRepository {

    constructor() {
        this._base = new base('Historico');
    }

    async create (data) {
        return await this._base.create(data)
    }

    async update (id, data) {
        return await this._base.update(id, data);
    }

    async getAll () {
        return await this._base.getAll();
    }

    async getbyId (id) {
        return await this._base.getbyId(id);
    }

    async delete (id) {
        return await this._base.delete(id);
    }
}

module.exports =historicoRepository;