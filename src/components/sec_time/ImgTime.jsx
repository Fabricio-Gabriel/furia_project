import React from 'react';
import timeFuria from '../../assets/imgs/furia-mobile.jpg'

const ImgTime = () => {
  return (
    <div className='md:w-[50%] w-[85%] md:h-full h-auto'>
      <img 
        src={timeFuria} 
        alt="Imagem time da furia"
        className='h-full w-full object-cover' 
      />
    </div>
  )
}

export default ImgTime;
