import React from 'react';
import Main from '../components/Main';
import Contain from '../components/Contain';
import ContainSobre from '../components/sec_sobre/ContainSobre';

const Home = () => {
  return (
    <>
    <div className='home flex flex-col items-center w-[100svw] h-[100svh'>

      <Main />
      <Contain container={<ContainSobre/>} />

    </div>
    </>
  )
}

export default Home;
