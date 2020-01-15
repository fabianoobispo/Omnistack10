const { Router } = require('express');
const DevController = require('./controllers/DevController');
const SearchController = require('./controllers/SearchController');

const routes = Router();

routes.get('/devs', DevController.index);
routes.post('/devs', DevController.store);

routes.get('/search', SearchController.index);

module.exports = routes;

//metodos http: get, post, put delete

//tipos de parametros
//query params: request.query (filtros, ordenaçao, paginacao, ....)
//route params:  request.params (idendificar um recurso na alteracao ou renmocao)
//body: request.body (dados para criacao ou alteracao de um registro)

//mongodb (nao_relacional)
