import React from 'react';
import TitleRedes from './footer/TitleRedes';
import RedesSociais from './footer/RedesSociais';
import TxtRedes from './footer/TxtRedes';

const RedesFooter = () => {
  return (
    <div className=' md:w-[50%] w-[85%] md:h-full h-auto flex flex-col items-center md:justify-between gap-[8px]'>
      <TitleRedes />
      <TxtRedes />
      <RedesSociais />
    </div>
  )
}

export default RedesFooter;
