import React from 'react';
import camisaFuria from '../../assets/imgs/camisa-furia.jpg'

const ImgChat = () => {
  return (
    <div className='md:w-[50%] w-[85%] md:h-full bg-green-500'>
      <img 
        src={camisaFuria} 
        alt="camisa Furia"
        className='h-full object-cover' 
      />
    </div>
  )
}

export default ImgChat;
