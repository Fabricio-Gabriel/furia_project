import React from 'react';
import TxtSobre from './TxtSobre';
import ImgSobre from './ImgSobre';

const ContainSobre = () => {
  return (
    <div className='contain-sobre bg-amber-300 w-full min-[1000px]:h-[700px] h-[550px]

    min-[1360px]:max-w-[1350px] min-[1220px]:max-w-[1200px] min-[1100px]:max-w-[1000px] max-w-[950px]

    
    flex items-center justify-between 
    
    min-[1360px]:gap-1.5 min-[1220px]:gap-3.5 gap-2.5'>
      
        <TxtSobre />
        <ImgSobre />

    </div>
  )
}

export default ContainSobre;
