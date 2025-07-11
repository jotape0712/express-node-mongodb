import express from 'express';
import conectaDataBase from './config/dbConnect.js';
import routes from './routes/index.js';

const conexao = await conectaDataBase();

conexao.on("error", (erro) => {
    console.error("Erro na conexão com o banco de dados:", erro); // Conexao.on é usado para capturar erros na conexão com o banco de dados.
    process.exit(1); // Encerra o processo se houver erro na conexão.
    });

conexao.once("open", () => {
    console.log("Conexão com o banco de dados estabelecida com sucesso!"); // Conexao.once é usado para garantir que a conexão foi estabelecida antes de continuar.
    });

const app = express();
routes(app);

// Rotas 

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