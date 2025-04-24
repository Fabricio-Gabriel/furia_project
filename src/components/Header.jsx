import React from 'react';
import { Link } from 'react-router-dom';
import logoFuria from '../assets/imgs/furia.png'


const Header = () => {
  return (
    <div className='header w-full h-[70px] flex items-center justify-between'>
      <div className="header_div--logo w-[70%]">
        <Link to="/">
          <img className='overflow-hidden h-[50px]' src={logoFuria} alt="Logo da Furia"/>
        </Link>
      </div>

      <div className="header_nav-nav flex w-[30%]">
          <ul className='text-white flex items-center justify-between w-full text-[1.2rem]'>
            <li><Link to="/"></Link>Home</li>
            <li><Link to="#"></Link>Sobre</li>
            <li><Link to="#">Contato</Link></li>
            <li><Link to="#"></Link>Nosso Time</li>
          </ul>
      </div>
    </div>
  )
}

export default Header;
