import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram, faFacebook, faXTwitter } from '@fortawesome/free-brands-svg-icons';

const RedesSociais = () => {
  return (
    <div className='w-full flex justify-between'>
      <ul className='text-[#fff] md:text-[1.2rem] min-[380px]:text-[1rem] min-[345px]:text-[0.9rem] text-[0.75rem] flex flex-row gap-6 items-center'>

        <li><a href="https://www.instagram.com/furiagg/" target='_blank'
        className='hover:text-[#bebebe] transition-all duration-500 
        delay-0 ease-in-out flex items-center gap-1'><FontAwesomeIcon icon={faInstagram}/>Instagram</a></li>

        <li><a href="https://www.facebook.com/furiagg" target='_blank'
        className='hover:text-[#bebebe] transition-all duration-500 
        delay-0 ease-in-out flex items-center gap-1'><FontAwesomeIcon icon={faFacebook}/>Facebook</a></li>

        <li><a href="https://x.com/FURIA" target='_blank'
        className='hover:text-[#bebebe] transition-all duration-[0.3s] 
        delay-0 ease-in-out flex items-center gap-1'><FontAwesomeIcon icon={faXTwitter} />X</a></li>

      </ul>

    </div>
  )
}

export default RedesSociais;
