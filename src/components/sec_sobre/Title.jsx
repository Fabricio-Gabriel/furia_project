import React from 'react';
import txtFuria from '../../assets/imgs/txt-furia.png';

const Title = () => {
  return (
    <div className='w-full h-auto overflow-y-hidden'>
      <h1 className='title h1-sobre h-full flex items-center min-[388px]:gap-[13px] gap-[7px] min-[950px]:text-5xl min-[388px]:text-4xl text-2xl overflow-y-hidden'>Conheça a 
        
        <img src={txtFuria} className="min-[950px]:h-[38px] min-[388px]:h-[28px] h-[19px]"/>
        
      </h1>
    </div>
  )
}

export default Title;
