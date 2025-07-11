import express from 'express';
import conectaDataBase from './config/dbConnect.js';
import usuario from './models/usuario.js';

const conexao = await conectaDataBase();

conexao.on("error", (erro) => {
    console.error("Erro na conexão com o banco de dados:", erro); // Conexao.on é usado para capturar erros na conexão com o banco de dados.
    process.exit(1); // Encerra o processo se houver erro na conexão.
    });

conexao.once("open", () => {
    console.log("Conexão com o banco de dados estabelecida com sucesso!"); // Conexao.once é usado para garantir que a conexão foi estabelecida antes de continuar.
    });

const app = express();
app.use(express.json()); // Isso é chamado de middleware, que permite que o Express entenda requisições com corpo JSON.


// Rotas 
app.get("/", (req, res) => {
    res.status(200).send("Node.js");
});

app.get("/usuarios", async (req, res) => { //async serve para lidar com operações assíncronas, como consultas ao banco de dados.
    const listaUsuarios =  await usuario.find({}); // await é usado para esperar a resposta da consulta ao banco de dados antes de continuar.
    // .find é um método do Mongoose que busca todos os documentos na coleção.
    res.status(200).json(listaUsuarios); // Retorna a lista de usuários em formato JSON.
});

app.get("/usuarios/:id", (req, res) => {
    const index = buscaUsuario(req.params.id);
    req.params.id ? res.status(200).json(usuarios[index]) : res.status(404).send("Usuário não encontrado!");
});

app.post("/usuarios", (req, res) => {
    usuarios.push(req.body);
    res.status(201).send("Usuário adicionado com sucesso!");
});

app.put("/usuarios/:id", (req, res) => {
    const index = buscaUsuario(req.params.id);
    usuarios[index] = req.body;
    res.status(200).send("Usuário atualizado com sucesso!");
});

app.delete("/usuarios/:id", (req, res) => {
    const index = buscaUsuario(req.params.id);
    usuarios.splice(index, 1);
    res.status(200).send("Usuário removido com sucesso!");
    
});

export default app;