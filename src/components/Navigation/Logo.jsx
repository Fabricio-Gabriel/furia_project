import React from 'react';
import { Link } from 'react-router-dom';
import logoFuria from '../../assets/imgs/furia.png'

const Logo = () => {
  return (
    <div className="header_div--logo ">
        <Link to="/">
          <img
            className="h-[50px] overflow-hidden"
            src={logoFuria}
            alt="Logo da Furia"
          />
        </Link>
      </div>
  )
}

export default Logo
