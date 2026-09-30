import express from "express"
import cors from 'cors' 
import path from 'path'
import{ fileURLToPath } from 'url'

// Importando o arquivo de rotas

import cardapioRoutes from "./rotas/cardapio.js";
import produtosRoutes from "./rotas/produtos.js";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const port = 3000;

app.use(cors()); // Libera as requisições de qualquer origem
app.use(express.json());

 


app.use (express.static(path.join(__dirname, 'public')));
app.use ('/img', express.static(path.join(__dirname, 'img')));

app.use("/api/cardapio", cardapioRoutes);
app.use("/api/produtos", produtosRoutes);

app.listen(port, () => {
  console.log(`Servidor rodando em http://localhost:${port}`);
});