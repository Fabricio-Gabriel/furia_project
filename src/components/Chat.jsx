import { useEffect, useState, useRef } from 'react';
import { io } from 'socket.io-client';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXmark } from '@fortawesome/free-solid-svg-icons';
import { faRobot } from '@fortawesome/free-solid-svg-icons';
import gsap from 'gsap';

const socket = io('http://localhost:4000');

function Chat({ isOpen, onClose }) {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState('');
  const chat = useRef(null);

  console.log(window.location.origin);

  useEffect(() => {
    if (isOpen) {
      gsap.to(chat.current, {
        y: 0,
        opacity: 1,
        duration: 0.4,
        ease: "power3.out",
        pointerEvents: "auto"
      });
    } else {
      gsap.to(chat.current, {
        y: 100,
        opacity: 0,
        duration: 0.3,
        ease: "power2.in",
        pointerEvents: "none"
      });
    }
  },[isOpen]);

  useEffect(() => {
    socket.on('chat message', (msg) => {
      setMessages(prev => [...prev, msg]);
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
    <div ref={chat} className={`chat z-60 fixed h-[600px] w-[500px] bg-[#111111] text-white 
    flex flex-col items-center rounded-2xl p-6 bottom-5 right-5
    ${isOpen ? 'translate-y-0 opacity-100' : 'translate-y-full opacity-0 pointer-events-none'}`}>

      <div className='header-chat flex flex-row-reverse justify-between w-full'>

        <button onClick={onClose} className="text-gray-500 text-[1.5rem] hover:cursor-pointer 
        hover:text-red-500 overflow-y-hidden"><FontAwesomeIcon icon={faXmark} /></button>
        <h1 className="overflow-y-hidden text-3xl font-bold text-white mb-6"><FontAwesomeIcon icon={faRobot} /> ChatBot Furia</h1>

      </div>

      <div className="w-full max-w-2xl h-full bg-[#111111] overflow-y-auto p-4 flex flex-col mb-4 space-y-2">
        {messages.map((msg, i) => (
          <div
            key={i}
            className={`p-3 rounded-lg w-fit max-w-full ${msg.sender === 'Bot' 
              ? 'bg-purple-700 italic text-white self-start' 
              : 'bg-gray-700 self-end'}`}
          >
            {msg.text}
          </div>
        ))}
      </div>
      <form className="flex w-full md:h-[7%] h-[8%] max-w-2xl" onSubmit={sendMessage}>
        <input
          className="input-chat w-[80%] h-full flex-1 p-3 bg-[#1b1b1b] text-white placeholder-gray-400 outline-none rounded-[3px] border-[1px] border-white"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Mande seu apoio para a FURIA..."
        />
        <button
          type="submit"
          className="w-[20%] h-full bg-white border-white text-black hover:cursor-pointer 
          hover:bg-[#111111] hover:border-[1px] hover:text-white px-4 py-2 rounded-[3px]
          transition-all duration-[.2s] ease-in-out delay-0"
        >
          Enviar
        </button>
      </form>
    </div>
  );
}

export default Chat;