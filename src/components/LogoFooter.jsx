import React from 'react';
import ImgFooter from './footer/ImgFooter';
import TxtFooter from './footer/TxtFooter';

const LogoFooter = () => {
  return (
    <div className='bg-red-400 md:w-[50%] w-[85%] h-auto flex flex-col items-center gap-[14px]'>
      <ImgFooter />
      <TxtFooter />
    </div>
  )
}

export default LogoFooter;
