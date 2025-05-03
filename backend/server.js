const express = require('express');
const http = require('http');
const mongoose = require('mongoose');
const { Server } = require('socket.io');
const cors = require('cors');
const dotenv = require('dotenv');

dotenv.config();

const app = express();
app.use(cors({
  origin: ['http://localhost:5173', 'http://localhost:3000', 'https://furia-project-chi.vercel.app', '*.railway.app'],
  credentials: true
}));

const server = http.createServer(app);
const io = new Server(server, {
  cors: {
    origin: ['http://localhost:5173', 'http://localhost:3000', 'https://furia-project-chi.vercel.app', '*.railway.app'],
    methods: ['GET', 'POST'],
    credentials: true
  }
});

mongoose.connect(process.env.DATABASE)
  .then(() => console.log('MongoDB conectado'))
  .catch(err => console.error('Erro ao conectar MongoDB:', err));

const MessageSchema = new mongoose.Schema({
  sender: String,
  text: String,
  createdAt: { type: Date, default: Date.now }
});

const BotMessageSchema = new mongoose.Schema({
  eventType: String
});

const Message = mongoose.model('Message', MessageSchema);
const BotMessage = mongoose.model('BotMessage', BotMessageSchema);

const rounds = [0];
const score = { furia: 0, adversario: 0 };

const eventMap = {
  timer: () => `[Bot]: Faltam ${Math.floor(Math.random() * 15) + 5} minutos para o próximo jogo.`,
  doubleKill: () => `[Bot]: KSCERATO eliminou 2 adversários!`,
  plantC4: () => `[Bot]: yuurih plantou a C4!`,
  aggressivePlay: () => `[Bot]: arT fez uma jogada agressiva no meio.`,
  roundWin: () => {
    rounds[0]++;
    return `[Bot]: FURIA venceu o round ${rounds[0]}!`;
  },
  scoreUpdate: () => {
    const rand = Math.random();
    if (rand > 0.5) score.furia++;
    else score.adversario++;
    return `[Bot]: Placar Atual - FURIA ${score.furia} x ${score.adversario} ADV`;
  },
  pause: () => `[Bot]: Pausa tática da FURIA.`
};

async function seedBotMessages() {
  const count = await BotMessage.countDocuments();
  if (count === 0) {
    const events = [
      { eventType: 'timer' },
      { eventType: 'doubleKill' },
      { eventType: 'plantC4' },
      { eventType: 'aggressivePlay' },
      { eventType: 'roundWin' },
      { eventType: 'scoreUpdate' },
      { eventType: 'pause' }
    ];
    await BotMessage.insertMany(events);
    console.log('Eventos do bot inseridos no MongoDB');
  } else {
    console.log('Eventos do bot já existentes no MongoDB');
  }
}

async function startGameBot() {
  const botMessages = await BotMessage.find();

  if (!botMessages.length) {
    console.error('Nenhum evento de bot encontrado no banco.');
    return;
  }

  setInterval(async () => {
    const random = botMessages[Math.floor(Math.random() * botMessages.length)];
    const generateMessage = eventMap[random.eventType];

    if (!generateMessage) return;

    const text = generateMessage();
    const msg = new Message({ sender: 'Bot', text });
    await msg.save();
    io.emit('chat message', msg);
  }, 8000);
}

app.get('/messages', async (req, res) => {
  const allMessages = await Message.find().sort({ createdAt: 1 });
  res.json(allMessages);
});

io.on('connection', (socket) => {
  console.log('Fã conectado');

  socket.on('chat message', async (msgText) => {
    const msg = new Message({ sender: 'Fã', text: msgText });
    await msg.save();
    io.emit('chat message', msg);
    console.log('mensagem enviada via socket: ', msg);
  });

  socket.on('disconnect', () => {
    console.log('Fã desconectado');
  });
});

const PORT = process.env.PORT || 4000;

server.listen(PORT, async () => {
  console.log(`Servidor na porta: ${PORT}`);
  await seedBotMessages();
  await startGameBot();
});
