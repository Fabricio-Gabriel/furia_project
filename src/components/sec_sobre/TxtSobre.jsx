import React from 'react';
import Title from './Title';
import Paragraph from './Paragraph';

const TxtSobre = () => {
  return (
    <div className='md:w-[50%] w-[85%] h-auto flex flex-col items-center md:justify-between gap-[8px]'>
      <Title />
      <Paragraph />
    </div>
  )
}

export default TxtSobre;
