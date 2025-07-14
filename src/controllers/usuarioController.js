
import usuario from "../models/usuario.js";

class UsuarioController {

    static async listarUsuarios(req, res) { // Static serve para definir um método que pode ser chamado sem instanciar a classe
        try {
            const listaUsuarios =  await usuario.find({}); // await é usado para esperar a resposta da consulta ao banco de dados antes de continuar.
                                                       // .find é um método do Mongoose que busca todos os documentos na coleção.
             res.status(200).json(listaUsuarios); // Retorna a lista de usuários em formato JSON.
        } catch (erro) {
            res.status(500).json({ message:`${erro.message} - Falha ao listar usuarios` }); // Retorna um erro caso a consulta falhe.
        }
    }

    static async listarUsuarioPorId(req, res) { // Static serve para definir um método que pode ser chamado sem instanciar a classe
        try {
            const id  = req.params.id; // Extrai o id dos parâmetros da requisição.
            const usuarioEncontrado =  await usuario.findById(id); // await é usado para esperar a resposta da consulta ao banco de dados antes de continuar.
                                                       // .find é um método do Mongoose que busca todos os documentos na coleção.
             res.status(200).json(usuarioEncontrado); // Retorna a lista de usuários em formato JSON.
        } catch (erro) {
            res.status(500).json({ message:`${erro.message} - Falha ao listar usuario` }); // Retorna um erro caso a consulta falhe.
        }
    }

    static async cadastrarUsuarios(req, res) {
        try {
            const novoUsuario = await usuario.create(req.body); // Cria um novo usuário com os dados do corpo da requisição.
            res.status(201).json({ message: "Criado com sucesso", usuario: novoUsuario }); // Retorna o usuário criado com status 201.
        } catch (erro) {
            res.status(500).json({ message:`${erro.message} - Falha ao cadastrar usuario` }); // Retorna um erro caso a criação falhe.
            // 500 é o status de erro interno do servidor.
        }}

    static async atualizarUsuario(req, res) { 
        try {
            const id  = req.params.id; 
            await usuario.findByIdAndUpdate(id, req.body);
                                                       
             res.status(200).json({ message: "Atualizado com sucesso" }); 
        } catch (erro) {
            res.status(500).json({ message:`${erro.message} - Falha ao atualizar usuario` }); 
        }
    }

    // ...existing code...
    static async deletarUsuarios(req, res) {
        try {
            const id  = req.params.id; 
            await usuario.findByIdAndDelete(id); 
            res.status(200).json({ message: "Deletado com sucesso" }); 
        } catch (erro) {
            res.status(500).json({ message:`${erro.message} - Falha ao deletar usuario` }); 
        }
    } 

} 

export default UsuarioController;
        
        
