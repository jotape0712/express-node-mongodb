
import mongoose from 'mongoose';

async function conectaDataBase() {
    mongoose.connect(process.env='mongodb+srv://admin:admin@cluster0.ezv50mb.mongodb.net/baseDeUsuarios?retryWrites=true&w=majority&appName=Cluster');

    return mongoose.connection;
}

export default conectaDataBase;



