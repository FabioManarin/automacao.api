const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const variables = require('../bin/configuration/variables')
var cors = require('cors');

//Routers
const historicoRouter = require('../routes/historico-router');
const produtoRouter = require('../routes/produto-router');
const usuarioRouter = require('../routes/usuario-router');

const app = express();

//Configuração de parse json
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cors());

//Configurando a conexão com banco de dados
mongoose.connect(variables.Databse.conecction, { useNewUrlParser: true });

//Configurando as rotas
app.use('/api/historico', historicoRouter);
app.use('/api/produto', produtoRouter);
app.use('/api/usuario', usuarioRouter);

module.exports = app;