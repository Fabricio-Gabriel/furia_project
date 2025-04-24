import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Logo from "./Logo";
import Nav from "./Nav";
import Menu from "./Menu";

const Header = () => {
  const [larguraTela, setLarguraTela] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setLarguraTela(window.innerWidth);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <div className="header h-[70px] w-full flex items-center justify-around">
      
      <Logo/>

      {
        (larguraTela > 950 
          ? <Menu display={"hidden"}/> 
          : <Menu display={"block"}/>
        )
      }

      {
        (larguraTela < 950
          ? <Nav display={"hidden"}/>
          : <Nav display={"block"}/>
        )
      }

    </div>
  );
};

export default Header;
