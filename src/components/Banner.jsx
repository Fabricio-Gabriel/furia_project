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
    <div className=' h-full'>
      {
        (larguraTela < 768
            ? <img 
                src={furiaBannerResponsivo} 
                alt="Banner furia adidas"
                className='object-cover' 
            />

            : <img 
                src={furiaBanner} 
                alt="Banner furia adidas" 
                className='object-cover'
            />
        )
      }
    </div>
  )
}

export default Banner;
