const express = require('express');
const http = require('http');
const { Server } = require('socket.io');
const cors = require('cors');

const app = express();
app.use(cors());

const server = http.createServer(app);
const io = new Server(server, {
  cors: { 
    origin: "http://localhost:5173",
    methods: ["GET", "POST"] 
}
});

function startGameBot() {
  const rounds = [0];
  const score = { furia: 0, adversario: 0 };

  const botEvents = [
    () => `[Bot]: Faltam ${Math.floor(Math.random() * 15) + 5} minutos para o próximo jogo.`,
    () => `[Bot]: KSCERATO eliminou 2 adversários!`,
    () => `[Bot]: yuurih plantou a C4!`,
    () => `[Bot]: arT fez uma jogada agressiva no meio.`,
    () => {
      rounds[0]++;
      return `[Bot]: FURIA venceu o round ${rounds[0]}!`;
    },
    () => {
      const rand = Math.random();
      if (rand > 0.5) score.furia++;
      else score.adversario++;
      return `[Bot]: Placar Atual - FURIA ${score.furia} x ${score.adversario} ADV`;
    },
    () => `[Bot]: Pausa tática da FURIA.`,
  ];

  setInterval(() => {
    const msg = botEvents[Math.floor(Math.random() * botEvents.length)]();
    io.emit('chat message', { sender: 'Bot', text: msg });
  }, 8000);
}

io.on('connection', (socket) => {
  console.log('Fã conectado');

  socket.on('chat message', (msg) => {
    io.emit('chat message', { sender: 'Fã', text: msg });
  });

  socket.on('disconnect', () => {
    console.log('Fã desconectado');
  });
});

server.listen(4000, () => {
  console.log('Servidor rodando na porta 4000');
  startGameBot();
});
