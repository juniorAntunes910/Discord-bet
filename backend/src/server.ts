import 'dotenv/config'
import  Express  from 'express'
import { router } from './router.js'
import { createServer } from 'node:http'
import { Server } from 'socket.io'

const app = Express();
app.use(Express.json()); // Assim ele lê json
app.use(router); // Rotas

const server = createServer(app);
const io = new Server(server, {
    cors: {
        origin: "*",
    }
});

export { io };

io.on("connection", (socket) => {
  console.log(`✅ Usuário conectado: ${socket.id}`);

  socket.on("disconnect", () => {
    console.log(`❌ Usuário desconectado: ${socket.id}`);
  });
});

app.listen(3000, () => {
    console.log("Servidor Rodando em http://localhost:3000")
})

