
import express from 'express';
import usuarioController from '../controllers/usuarioController.js';

const routes = express.Router();

routes.get('/usuarios', usuarioController.listarUsuarios);
routes.get('/usuarios/:id', usuarioController.listarUsuarioPorId);
routes.post('/usuarios', usuarioController.cadastrarUsuarios);
routes.put('/usuarios/:id', usuarioController.atualizarUsuario);
routes.delete('/usuarios/:id', usuarioController.deletarUsuarios);

export default routes;

