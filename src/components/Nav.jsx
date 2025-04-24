import React from 'react';
import { Link } from "react-router-dom";

const Nav = ({ display }) => {
  return (
    <div className={`header_nav-nav flex ${display}`}>
        <ul className=" w-full flex items-center gap-10 text-[1.2rem] text-white">
            <li>
                <Link to="/">Home</Link>
            </li>
            <li>
                <Link to="#">Sobre</Link>
            </li>
            <li>
                <Link to="#">Contato</Link>
            </li>
            <li>
                <Link to="#">Nosso Time</Link>
            </li>
        </ul>
    </div>
  )
}

export default Nav;
