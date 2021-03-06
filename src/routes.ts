import {Router} from 'express';
import UsuariosController from './controllers/UsuariosController';
import AuthController from './controllers/AuthController';
import AuthMiddleware from './middlewares/AuthMiddleware';
import ClientesControllers from './controllers/ClientesControllers';
import AsyncController from './controllers/AsyncController';
import ProdutoControllers from './controllers/ProdutoControllers';
import CondicoesPagamentoController from './controllers/CondicoesPagamentoController';

const routes = Router();

/*
* Usuario
*/
routes.get('/usuarios',UsuariosController.Index);
routes.get('/usuarios/:id',AuthMiddleware,UsuariosController.show);
routes.post('/usuarios', UsuariosController.create);
routes.post('/usuarios/async', UsuariosController.asyncupdate);
routes.post('/auth', AuthController.Authenticate);

/*
* Clientes
*/
routes.get('/clientes/:cnpj_emp',ClientesControllers.index);
routes.get('/clientes/sync/pull',AsyncController.asyncClientes);
routes.post('/clientes/repre',ClientesControllers.indexRepresentante);
routes.post('/clientes', ClientesControllers.create);

/*
* Produtos
*/
routes.post('/produtos',ProdutoControllers.create);

/*
*  Condições de pagamento
*/

routes.post('/condicoes_pagamento',CondicoesPagamentoController.create);


export default routes;