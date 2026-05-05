import { io } from "socket.io-client";

// Tenta conectar localmente sem passar pelo navegador
const socket = io("http://localhost:3000");

socket.on("connect", () => {
  console.log("✅ CONECTADO VIA TERMINAL!");
});

socket.on("new_message", (data) => {
  console.log("🚀 MENSAGEM RECEBIDA:", data);
});