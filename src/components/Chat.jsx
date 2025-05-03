import { useEffect, useState, useRef } from 'react';
import { io } from 'socket.io-client';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXmark, faRobot } from '@fortawesome/free-solid-svg-icons';
import gsap from 'gsap';

function Chat({ isOpen, onClose }) {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState('');
  const chat = useRef(null);
  const bottomRef = useRef(null);
  const socketRef = useRef(null);

  useEffect(() => {
    fetch(`${import.meta.env.VITE_BACKEND_URL}/messages`)
      .then(response => response.json())
      .then(data => setMessages(data))
      .catch(e => console.error('erro ao carregar mensagens:', e))
  }, [])

  useEffect(() => {
    socketRef.current = io(import.meta.env.VITE_BACKEND_URL);
  
    socketRef.current.on('chat message', (msg) => {
      console.log('Mensagem recebida', msg);
      setMessages(prev => [...prev, msg]);
    });
  
    return () => {
      socketRef.current.disconnect();
    };
  }, []);

  const sendMessage = (e) => {
    e.preventDefault();
    if (input.trim()) {
      socketRef.current.emit('chat message', input);
      setInput('');
    }
  };

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages])

  useEffect(() => {
    if (isOpen) {
      gsap.to(chat.current, {
        y: 0,
        opacity: 1,
        duration: 0.4,
        ease: 'power3.out',
        pointerEvents: 'auto',
      });
    } else {
      gsap.to(chat.current, {
        y: 100,
        opacity: 0,
        duration: 0.3,
        ease: 'power2.in',
        pointerEvents: 'none',
      });
    }
  }, [isOpen])

  return (
    <div
      ref={chat}
      className={`chat z-60 fixed min-[540px]:h-[600px] min-[540px]:w-[500px] w-[90vw] h-[90vh] bg-[#111111] text-white 
      flex flex-col rounded-2xl bottom-5 right-5
      ${isOpen ? 'translate-y-0 opacity-100' : 'translate-y-full opacity-0 pointer-events-none'}`}
    >
      <div className="header-chat flex items-center flex-row-reverse justify-between  w-full shrink-0 p-4">
        <button
          onClick={onClose}
          className="text-gray-500 text-[1.5rem] hover:cursor-pointer hover:text-red-500"
        >
          <FontAwesomeIcon icon={faXmark} />
        </button>
        <h1 className="min-[400px]:text-3xl text-2xl font-bold overflow-hidden text-white">
          <FontAwesomeIcon icon={faRobot} /> ChatBot Furia
        </h1>
      </div>

      
      <div className="flex-1 overflow-y-auto pr-2 scrollbar-custom px-4 space-y-2">
        {messages.map((msg, i) => (
          <div
            key={i}
            className={`msg p-3 rounded-lg min-[450px]:text-[1rem] min-[350px]:text-[0.9rem] text-[0.8rem] max-w-[80%] ${
              msg.sender === 'Bot'
                ? 'bg-purple-700 italic text-white w-fit ml-0'
                : 'bg-gray-700 text-white ml-auto w-fit user'
            }`}
          >
            {msg.text}
          </div>
        ))}
        <div ref={bottomRef} />
      </div>

    
      <form
        className="flex min-[470px]:h-[6%] h-[5%] w-full  shrink-0"
        onSubmit={sendMessage}
      >
        <input
          className="input-chat w-[80%] min-[420px]:text-[1rem] text-[0.8rem] p-3 bg-[#1b1b1b] text-white placeholder-gray-400 outline-none rounded-[4px] border border-white"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Mande seu apoio para a FURIA..."
        />
        <button
          type="submit"
          className="bg-white w-[20%] border border-white text-black hover:bg-[#111111] cursor-pointer hover:text-white px-4 py-2 rounded transition-all duration-200"
        >
          Enviar
        </button>
      </form>
    </div>
  );
}

export default Chat;
