import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faComment } from '@fortawesome/free-regular-svg-icons';
import { useChat } from "../../components/ChatContext";
const ButtonChat = () => {

  const { setChatOpen } = useChat();

  return (
    <div className='w-full h-12 flex'>
        <button className='btn-chat h-full min-[1220px]:w-[40%] min-[768px]:w-[171px] w-full flex items-center justify-center min-[1220px]:gap-[18px] gap-[10px] 
        font-semibold bg-white min-[768px]:rounded-[30px] overflow-y-hidden border-2 border-white
        
        min-[1220px]:text-[1rem] text-[0.8rem]
        
        hover:cursor-pointer hover:bg-[#111111] hover:border-2 hover:text-white
        
        transition-all duration-[.4s] ease-in-out delay-0' onClick={() => setChatOpen(true)}>
          <FontAwesomeIcon icon={faComment} className='font-semibold'/>
          <p>Participe do chat</p>
        </button>
    </div>
  )
}

export default ButtonChat;
