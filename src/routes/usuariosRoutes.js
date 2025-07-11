
import express from 'express';
import usuarioController from '../controllers/usuarioController.js';

const routes = express.Router();

routes.get('/usuarios', usuarioController.listarUsuarios);

export default routes;

