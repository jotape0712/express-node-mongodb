
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
        // Validação para garantir que a função é válida
        const { funcao } = req.body;
        if (funcao && !['usuario', 'administrador'].includes(funcao)) {
            return res.status(400).json({ 
                message: "Função deve ser 'usuario' ou 'administrador'" 
            });
        }
        
        const novoUsuario = await usuario.create(req.body); // Cria um novo usuário com os dados do corpo da requisição.
        res.status(201).json({ message: "Criado com sucesso", usuario: novoUsuario }); // Retorna o usuário criado com status 201.
    } catch (erro) {
        res.status(500).json({ message:`${erro.message} - Falha ao cadastrar usuario` }); // Retorna um erro caso a criação falhe.
        // 500 é o status de erro interno do servidor.
    }
}

    static async atualizarUsuario(req, res) { 
        try {
            const id  = req.params.id; 
            await usuario.findByIdAndUpdate(id, req.body);
                                                       
             res.status(200).json({ message: "Atualizado com sucesso" }); 
        } catch (erro) {
            res.status(500).json({ message:`${erro.message} - Falha ao atualizar usuario` }); 
        }
    }

    static async deletarUsuarios(req, res) {
        try {
            const id  = req.params.id; 
            await usuario.findByIdAndDelete(id); 
            res.status(200).json({ message: "Deletado com sucesso" }); 
        } catch (erro) {
            res.status(500).json({ message:`${erro.message} - Falha ao deletar usuario` }); 
        }
    } 

    static async loginUsuario(req, res) {
    try {
        const { email, senha } = req.body;
        const usuarioEncontrado = await usuario.findOne({ email, senha }); 
        if (usuarioEncontrado) {
            res.status(200).json({ message: "Login realizado com sucesso", usuario: usuarioEncontrado });
        } else {
            res.status(401).json({ message: "E-mail ou senha inválidos" });
        }
    } catch (erro) {
        res.status(500).json({ message: `${erro.message} - Falha ao realizar login` });
    }
}

    

} 

export default UsuarioController;
        
        
