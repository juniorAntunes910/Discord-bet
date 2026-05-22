import 'dotenv/config'
import Express from 'express'
import { createServer } from 'node:http'
import { Server } from 'socket.io'
import cors from 'cors';

const app = Express();
app.use(Express.json());
app.use(cors());

// 1. Crie o servidor HTTP e o IO PRIMEIRO
const server = createServer(app);
const io = new Server(server, {
    cors: {
        origin: "*",
    }
});

// 2. EXPORTE o io antes de importar as rotas
export { io };

// 3. AGORA SIM você importa as rotas
// (Assim, quando o service importar o io, ele já vai existir)
import { router } from './router.js' 
app.use(router);

io.on("connection", (socket) => {
  console.log(`✅ Usuário conectado: ${socket.id}`);
});

// 4. IMPORTANTE: Use server.listen e não app.listen
server.listen(3000, () => {
    console.log("🚀 Servidor HTTP e Socket rodando em http://localhost:3000")
})