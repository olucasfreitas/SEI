const express = require('express');

const EstabelecimentoController = require('./controllers/EstabelecimentoController');
const ItemController = require('./controllers/ItemController');
const SessionController = require('./controllers/SessionController');
const PedidoController = require('./controllers/PedidoController');
const UserController = require('./controllers/UserController');

const routes = express.Router();

routes.post('/sessions', SessionController.create);

routes.get('/estabelecimentos/list', EstabelecimentoController.index);
routes.post('/estabelecimentos/create', EstabelecimentoController.create);

routes.get('/itens/list', ItemController.index);
routes.post('/itens/create', ItemController.create);
routes.delete('/itens/delete/:id', ItemController.delete);

routes.get('/user/list', UserController.index);
routes.post('/user/create', UserController.create);
routes.put('/user/entry/:id', UserController.puEntry);
routes.delete('/user/delete/:id', UserController.delete);

routes.get('/pedidos/list', PedidoController.index);
routes.post('/pedidos/create', PedidoController.create);
routes.delete('/pedidos/delete/:id', PedidoController.delete);

module.exports = routes;