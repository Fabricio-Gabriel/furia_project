import React from 'react';
import { Link } from "react-router-dom";

const Nav = ({ display, direction, distance, color, height}) => {
  return (
    <div className={`header_nav-nav h-full flex ${display} ${color} ${height}`}>
        <ul className={`w-full flex ${direction} items-center ${distance} text-[1.2rem] text-white`}>
            <li>
                <Link to="/" className='transition-all duration-[0.3s] ease-in-out 
                delay-0 relative after:overflow-hidden after:content-[" "] 
                after:w-0 after:h-[2px] after:bg-white after:block after:absolute 
                after:left-0 after:bottom-0 after:transition-all after:duration-[0.3s] 
                after:ease-in-out after:delay-0 hover:after:w-full'>Home</Link>
            </li>
            <li>
                <Link to="#" className='transition-all duration-[0.3s] ease-in-out 
                delay-0 relative after:overflow-hidden after:content-[" "] 
                after:w-0 after:h-[2px] after:bg-white after:block after:absolute 
                after:left-0 after:bottom-0 after:transition-all after:duration-[0.3s] 
                after:ease-in-out after:delay-0 hover:after:w-full'>Sobre</Link>
            </li>
            <li>
                <Link to="#" className='transition-all duration-[0.3s] ease-in-out 
                delay-0 relative after:overflow-hidden after:content-[" "] 
                after:w-0 after:h-[2px] after:bg-white after:block after:absolute 
                after:left-0 after:bottom-0 after:transition-all after:duration-[0.3s] 
                after:ease-in-out after:delay-0 hover:after:w-full'>Contato</Link>
            </li>
            <li>
                <Link to="#" className='transition-all duration-[0.3s] ease-in-out 
                delay-0 relative after:overflow-hidden after:content-[" "] 
                after:w-0 after:h-[2px] after:bg-white after:block after:absolute 
                after:left-0 after:bottom-0 after:transition-all after:duration-[0.3s] 
                after:ease-in-out after:delay-0 hover:after:w-full'>Nosso Time</Link>
            </li>
        </ul>
    </div>
  )
}

export default Nav;
