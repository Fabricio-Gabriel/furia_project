import React from 'react';
import Nav from './Nav';

const Aside = ({ isVisible }) => {
  return (
    <div className={`aside-block absolute h-[92svh] 
    w-[70vw] sm:w-[50vw] right-0 top-[7.3vh] z-50 flex 
    flex-col items-center justify-center transition-all 
    duration-300 ${!isVisible ? "aside-hidden" : ''}`}>

        <Nav 
            display={"block"}
            direction={"flex-col"}
            distance={"justify-around"}
            height={"h-full"}
        />
      
    </div>
  )
}

export default Aside;
