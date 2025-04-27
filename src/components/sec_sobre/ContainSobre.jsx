import React from 'react';
import TxtSobre from './TxtSobre';
import ImgSobre from './ImgSobre';

const ContainSobre = () => {
  return (
    <div className='contain-sobre w-full h-auto

    min-[1360px]:max-w-[1350px] min-[1220px]:max-w-[1200px] min-[1100px]:max-w-[1000px] min-[1000px]:max-w-[950px] max-w-[900px] 

    
    flex flex-col-reverse justify-center items-center min-[768px]:items-center min-[768px]:flex-row min-[768px]:justify-between
    
    min-[1360px]:gap-[40px] min-[1220px]:gap-[35px] gap-[15px]'>
      
        <TxtSobre />
        <ImgSobre />

    </div>
  )
}

export default ContainSobre;
