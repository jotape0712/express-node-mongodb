
import usuario from "../models/usuario.js";

class UsuarioController {

    static async listarUsuarios(req, res) { // Static serve para definir um método que pode ser chamado sem instanciar a classe
        const listaUsuarios =  await usuario.find({}); // await é usado para esperar a resposta da consulta ao banco de dados antes de continuar.
                                                       // .find é um método do Mongoose que busca todos os documentos na coleção.
    res.status(200).json(listaUsuarios); // Retorna a lista de usuários em formato JSON.
    }

    static async cadastarUsuarios(req, res) {
        try {
            const novoUsuario = await usuario.create(req.body); // Cria um novo usuário com os dados do corpo da requisição.
            res.status(201).json({ message: "Criado com sucesso", usuario: novoUsuario }); // Retorna o usuário criado com status 201.
        } catch (erro) {
            res.status(500).json({ message:`${erro.message} - Falha ao cadastrar usuario` }); // Retorna um erro caso a criação falhe.
            // 500 é o status de erro interno do servidor.
        }}
        
};

export default UsuarioController; 
