import React from 'react';
import logoFuria from '../../assets/imgs/furia.png';

const ImgFooter = () => {
  return (
    <div className='w-full h-auto bg-blue-600 flex'>
        <a href="/" rel="noopener noreferrer">
            <img 
                src={logoFuria} 
                alt="logo da Furia"
                className='md:h-[80px] h-[60px] overflow-y-hidden'
            />
        </a> 
    </div>
  )
}

export default ImgFooter;
