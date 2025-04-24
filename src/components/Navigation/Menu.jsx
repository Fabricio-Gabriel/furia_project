import React from 'react';
import Aside from './Aside';

const Menu = ({ display, toggleAside }) => {
  return (
    <div className={`menu flex flex-col gap-1.5 cursor-pointer ${display}`} onClick={toggleAside}>

      <div className='w-8 h-0.5 bg-white'></div>
      <div className='w-8 h-0.5 bg-white'></div>
      <div className='w-8 h-0.5 bg-white'></div>
    </div>
  )
}

export default Menu;
