import React from 'react';
import Main from '../components/Main';
import Contain from '../components/Contain';
import ContainSobre from '../components/sec_sobre/ContainSobre';
import ContainChat from '../components/sec_chat/ContainChat';
import ContainTime from '../components/sec_time/ContainTime';
import Chat from '../components/Chat';
import PopUp from '../components/PopUp';
import { useChat } from "../components/ChatContext";


const Home = () => {
  const { isChatOpen, setChatOpen } = useChat();

  return (
    <>
    <div className='home flex flex-col items-center w-[100svw] relative'>

      <Main />
      <Contain container={<ContainSobre/>} />
      <Contain container={<ContainChat/>} color="#111111" />
      <Contain container={<ContainTime/>} color="#fff" />
      <Chat isOpen={isChatOpen} onClose={() => setChatOpen(false)}/>
      <PopUp onClick={() => setChatOpen(true)}/>
    </div>
    </>
  )
}

export default Home;
