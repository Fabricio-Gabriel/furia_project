import React from 'react';

const Menu = ({ display }) => {
  return (
    <div className={`flex flex-col gap-1.5 cursor-pointer ${display}`}>
      <div className='w-8 h-0.5 bg-white'></div>
      <div className='w-8 h-0.5 bg-white'></div>
      <div className='w-8 h-0.5 bg-white'></div>
    </div>
  )
}

export default Menu;
