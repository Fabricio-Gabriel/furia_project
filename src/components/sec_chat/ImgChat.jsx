import React from 'react';
import torcidaFuria from '../../assets/imgs/torcida_furia.jpg'

const ImgChat = () => {
  return (
    <div className='md:w-[50%] w-[85%] md:h-full h-auto'>
      <img 
        src={torcidaFuria} 
        alt="torcida Furia"
        className='h-full w-full object-cover' 
      />
    </div>
  )
}

export default ImgChat;
