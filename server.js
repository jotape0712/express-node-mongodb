
import "dotenv/config" // Importa o dotenv para carregar variáveis de ambiente do arquivo .env
import app from "./src/app.js"


const PORT = 3000; // Usando capslock quando queremos passar uma informação fixa.

app.listen(PORT, () => {
  console.log(`Servidor rodando!`); // Serve para fazer o servidor usar a porta e mostrar se esta funcionando!

})


