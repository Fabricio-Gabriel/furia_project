import React, { useEffect, useState, useRef } from 'react';
import furiaBanner from '../assets/imgs/furia-adidas.jpg';
import furiaBannerResponsivo from '../assets/imgs/furia-adidas2.jpg';
import gsap from 'gsap';

const Banner = () => {
   const [larguraTela, setLarguraTela] = useState(window.innerWidth);
   const banner = useRef(null);
  
    useEffect(() => {
        const handleResize = () => {
            setLarguraTela(window.innerWidth);
        };

        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    useEffect(() => {
      gsap.fromTo(
        banner.current,
        {
          opacity: 0
        },
        {
          opacity: 1,
          duration: 1,
          ease: "power2.out"
        }
      )
    }, []);

  return (
    <div ref={banner} className=' h-full'>
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
