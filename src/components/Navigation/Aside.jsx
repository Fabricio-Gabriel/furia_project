import React from 'react';
import Nav from './Nav';

const Aside = ({ isVisible, closeAside }) => {
  return (
    <div className={`aside-block absolute h-[92svh] 
    w-[70vw] sm:w-[50vw] right-0 top-[7vh] max-h-[1080px]:top-[6.5vh] z-100 flex 
    flex-col items-center justify-center transition-all 
    duration-300 ${!isVisible ? "aside-hidden" : ''}`}>

        <Nav 
            display={"block"}
            direction={"flex-col"}
            distance={"justify-around"}
            height={"h-full"}
            closeAside={closeAside}
        />
      
    </div>
  )
}

export default Aside;
