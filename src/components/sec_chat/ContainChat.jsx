import React from 'react';
import ImgChat from './ImgChat.jsx';
import TxtChat from './TxtChat.jsx';

const ContainChat = () => {
  return (
    <div className="contain-chat h-[600px] w-full min-[1360px]:max-w-[1350px] 
    min-[1220px]:max-w-[1200px] min-[1100px]:max-w-[1000px] 
    min-[1000px]:max-w-[950px] max-w-[900px] 

    flex flex-col justify-center items-center min-[768px]:items-center min-[768px]:flex-row min-[768px]:justify-between
    
    bg-red-300">

      <ImgChat />
      <TxtChat />

    </div>
  )
}

export default ContainChat;
