import express from 'express';
import conectaDataBase from './config/dbConnect.js';
import routes from './routes/index.js';
import cors from 'cors';





const conexao = await conectaDataBase();

conexao.on("error", (erro) => {
    console.error("Erro na conexão com o banco de dados:", erro); // Conexao.on é usado para capturar erros na conexão com o banco de dados.
    process.exit(1); // Encerra o processo se houver erro na conexão.
    });

conexao.once("open", () => {
    console.log("Conexão com o banco de dados estabelecida com sucesso!"); // Conexao.once é usado para garantir que a conexão foi estabelecida antes de continuar.
    });

const app = express();



const corsOptions = {
  origin: '*',
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
  allowedHeaders: ['Content-Type', 'Authorization']
};

app.use(cors(corsOptions));
app.options('*', cors(corsOptions));

routes(app);

export default app;