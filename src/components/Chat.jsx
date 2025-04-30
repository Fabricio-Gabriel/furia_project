import { useEffect, useState, useRef } from 'react';
import { io } from 'socket.io-client';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXmark, faRobot } from '@fortawesome/free-solid-svg-icons';
import gsap from 'gsap';

const socket = io('http://localhost:4000');

function Chat({ isOpen, onClose }) {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState('');
  const chat = useRef(null);
  const bottomRef = useRef(null);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

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
  }, [isOpen]);

  useEffect(() => {
    socket.on('chat message', (msg) => {
      setMessages((prev) => [...prev, msg]);
    });
    return () => socket.off('chat message');
  }, []);

  const sendMessage = (e) => {
    e.preventDefault();
    if (input.trim()) {
      socket.emit('chat message', input);
      setInput('');
    }
  };

  return (
    <div
      ref={chat}
      className={`chat z-60 fixed h-[600px] w-[500px] bg-[#111111] text-white 
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
        <h1 className="text-3xl font-bold overflow-hidden text-white">
          <FontAwesomeIcon icon={faRobot} /> ChatBot Furia
        </h1>
      </div>

      
      <div className="flex-1 overflow-y-auto pr-2 scrollbar-custom px-4 space-y-2">
        {messages.map((msg, i) => (
          <div
            key={i}
            className={`msg p-3 rounded-lg max-w-[80%] ${
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
        className="flex h-[6%] w-full  shrink-0"
        onSubmit={sendMessage}
      >
        <input
          className="w-[80%] p-3 bg-[#1b1b1b] text-white placeholder-gray-400 outline-none rounded-[4px] border border-white"
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
