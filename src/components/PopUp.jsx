import React from 'react';
import logoFuria from '../assets/imgs/furia.png';

const PopUp = ({ onClick }) => {
  return (
    <div className='fixed flex justify-center items-center 
        sm:w-[70px] sm:h-[70px] w-[59px] h-[59px] z-50 
        bg-[#000000] hover:bg-[#242424] hover:cursor-pointer 
        transition-all duration-[0.5s] ease-in-out delay-0
        rounded-[50%] bottom-31 md:right-15 right-6' 
        onClick={onClick}>
        
        <img src={logoFuria} alt="Logo furia" className='md:h-[40px] h-[35px]' />

    </div>
  )
}

export default PopUp;
