import React from 'react';
import ImgChat from './ImgChat.jsx';
import TxtChat from './TxtChat.jsx';

const ContainChat = () => {
  return (
    <div className="contain-chat h-[600px] w-full max-w-[1350px] bg-red-300 flex justify-between items-center">
      <ImgChat />
      <TxtChat />
    </div>
  )
}

export default ContainChat;
