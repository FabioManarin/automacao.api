'use strict'

require('../models/produto-model');
const base = require('../bin/base/repository-base');

class produtoRepository {

    constructor() {
        this._base = new base('Produto');
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

module.exports = produtoRepository;