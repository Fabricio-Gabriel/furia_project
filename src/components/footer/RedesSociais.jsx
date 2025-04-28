import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const RedesSociais = () => {
  return (
    <div className='bg-pink-500 w-full flex justify-between h-[60%]'>
      <ul className='text-[#fff] flex flex-row gap-6 items-center'>

        <li><a href="https://www.instagram.com/furiagg/" target='_blank'
        className='hover:text-[#bebebe]'>Instagram</a></li>

        <li><a href="https://www.facebook.com/furiagg" target='_blank'
        className='hover:text-[#bebebe]'>Facebook</a></li>

        <li><a href="https://x.com/FURIA" target='_blank'
        className='hover:text-[#bebebe]'>X</a></li>

      </ul>

    </div>
  )
}

export default RedesSociais;
