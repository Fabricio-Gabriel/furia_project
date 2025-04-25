import React, { useEffect, useState } from 'react';
import furiaBanner from '../assets/imgs/furia-adidas.jpg';
import furiaBannerResponsivo from '../assets/imgs/furia-adidas2.jpg'

const Banner = () => {
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
    <div>
      {
        (larguraTela < 768
            ? <img 
                src={furiaBannerResponsivo} 
                alt="Banner furia adidas" 
            />

            : <img 
                src={furiaBanner} 
                alt="Banner furia adidas" 
            />
        )
      }
    </div>
  )
}

export default Banner;
