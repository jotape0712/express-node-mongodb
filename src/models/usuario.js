import mongoose from "mongoose";

const usuarioSchema = new mongoose.Schema({ // Esquema para o modelo de usuário.
    // Definindo os campos do usuário com seus tipos e restrições.
    id: {
        type: mongoose.Schema.Types.ObjectId, 
    },
    email: {
        type: String, required: true, unique: true,
    },
    nome: {
        type: String, required: true,
    },
    telefone: {
        type: Number, required: true,
    },
    senha: {
        type: String, required: true,
    },
    funcao: {
        type: String, 
        enum: ['usuario', 'administrador'], // Só aceita esses valores
        default: 'usuario', // Valor padrão
        required: true
    }
    }, {versionKey: false}); // Desabilita o versionamento do documento.

const usuario = mongoose.model("usuarios", usuarioSchema); // Cria o modelo de usuário com o esquema definido.

export default usuario

