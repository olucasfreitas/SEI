const express = require('express');

const EstabelecimentoController = require('./controllers/EstabelecimentoController');
const ItemController = require('./controllers/ItemController');
const SessionController = require('./controllers/SessionController');

const routes = express.Router();

routes.post('/sessions', SessionController.create);

routes.get('/estabelecimentos', EstabelecimentoController.index);
routes.post('/estabelecimentos', EstabelecimentoController.create);

routes.get('/itens', ItemController.index);
routes.post('/itens', ItemController.create);
routes.delete('/itens/:id', ItemController.delete);

module.exports = routes;