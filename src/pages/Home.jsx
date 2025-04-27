import React from 'react';
import Main from '../components/Main';
import Contain from '../components/Contain';
import ContainSobre from '../components/sec_sobre/ContainSobre';
import ContainChat from '../components/sec_chat/ContainChat';

const Home = () => {
  return (
    <>
    <div className='home flex flex-col items-center w-[100svw] h-[100svh'>

      <Main />
      <Contain container={<ContainSobre/>} />
      <Contain container={<ContainChat/>} color="#111111"/>

    </div>
    </>
  )
}

export default Home;
