import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons';


const Whatsapp = () => {
  return (
    <a href='https://wa.me/5511993404466' target='_blank'>
        <div className='fixed flex justify-center items-center 
        sm:w-[70px] sm:h-[70px] w-[59px] h-[59px] z-40 
        bg-[#22b95c] hover:bg-[#22b95cec] 
        transition-all duration-[0.5s] ease-in-out delay-0
        rounded-[50%] bottom-13 md:right-15 right-6'>

            <FontAwesomeIcon icon={faWhatsapp} className='text-white text-3xl'/>

        </div>
    </a>
  )
}

export default Whatsapp;
