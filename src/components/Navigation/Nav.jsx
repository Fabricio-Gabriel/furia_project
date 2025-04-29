import React from 'react';
import { Link } from "react-router-dom";

const Nav = ({ display, direction, distance, color, height, closeAside}) => {
  return (
    <div className={`header_nav-nav h-full flex ${display} ${color} ${height}`}>
        <ul className={`w-full flex ${direction} items-center ${distance} text-[1.2rem] text-white`}>
            <li>
                <Link to="/" className='transition-all duration-[0.3s] ease-in-out 
                delay-0 relative after:overflow-hidden after:content-[" "] 
                after:w-0 after:h-[2px] after:bg-white after:block after:absolute 
                after:left-0 after:bottom-0 after:transition-all after:duration-[0.3s] 
                after:ease-in-out after:delay-0 hover:after:w-full' onClick={closeAside ? closeAside : undefined}>Home</Link>
            </li>
            <li>
                <a href="#sobre" className='transition-all duration-[0.3s] ease-in-out 
                delay-0 relative after:overflow-hidden after:content-[" "] 
                after:w-0 after:h-[2px] after:bg-white after:block after:absolute 
                after:left-0 after:bottom-0 after:transition-all after:duration-[0.3s] 
                after:ease-in-out after:delay-0 hover:after:w-full' onClick={closeAside ? closeAside : undefined}>Sobre</a>
            </li>
            <li>
                <a href="#nosso-chat" className='transition-all duration-[0.3s] ease-in-out 
                delay-0 relative after:overflow-hidden after:content-[" "] 
                after:w-0 after:h-[2px] after:bg-white after:block after:absolute 
                after:left-0 after:bottom-0 after:transition-all after:duration-[0.3s] 
                after:ease-in-out after:delay-0 hover:after:w-full' onClick={closeAside ? closeAside : undefined}>Nosso chat</a>
            </li>
            <li>
                <a href="#nosso-time" className='transition-all duration-[0.3s] ease-in-out 
                delay-0 relative after:overflow-hidden after:content-[" "] 
                after:w-0 after:h-[2px] after:bg-white after:block after:absolute 
                after:left-0 after:bottom-0 after:transition-all after:duration-[0.3s] 
                after:ease-in-out after:delay-0 hover:after:w-full' onClick={closeAside ? closeAside : undefined}>Nosso Time</a>
            </li>
        </ul>
    </div>
  )
}

export default Nav;
