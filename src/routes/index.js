
import  express from 'express';
import usuarios from '../routes/usuariosroutes.js';
import app from '../app.js';

const routes = (app) => {
    app.route('/').get((req, res) => {
        res.status(200).send({ curso: "Node" });
    });

    app.use(express.json(), usuarios);
};


export default routes;