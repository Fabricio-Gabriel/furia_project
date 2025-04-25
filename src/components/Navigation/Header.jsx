import React, { useState, useEffect } from "react";
import Logo from "./Logo";
import Nav from "./Nav";
import Menu from "./Menu";
import Aside from "./Aside";

const Header = () => {
  const [larguraTela, setLarguraTela] = useState(window.innerWidth);
  const [asideVisble, setAsideVisible] = useState(false);

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
        (larguraTela > 951.5
          ? <Menu display={"hidden"}/> 
          : <Menu display={"block"} toggleAside={() => setAsideVisible(prev => !prev)}/>
        )
      }

      {
        (larguraTela < 951.5
          ? <Nav display={"hidden"} 
            direction={"flex-row"} 
            distance={'gap-10'}
          />

          : <Nav display={"block"}
            direction={"flex-row"} 
            distance={'gap-15'}
          />
        )
      }

      {
        (larguraTela > 951.5
          ? <Aside isVisible={false}/>
          : <Aside isVisible={asideVisble}/>
        )
      }

    </div>
  );
};

export default Header;
