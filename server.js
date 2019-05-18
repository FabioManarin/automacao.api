'use strict'

const app = require('./bin/express');
const variables = require('./bin/configuration/variables');

app.listen(3000, () => {
    console.info(`Api inicializada com sucesso na porta ${variables.Api.port}`);
});