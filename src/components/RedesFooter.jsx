import React from 'react';
import TitleRedes from './footer/TitleRedes';
import RedesSociais from './footer/RedesSociais';

const RedesFooter = () => {
  return (
    <div className='bg-green-400 md:w-[50%] w-[85%] md:h-full h-auto flex flex-col items-center md:justify-between gap-[8px]'>
      <TitleRedes />
      <RedesSociais />
    </div>
  )
}

export default RedesFooter;
