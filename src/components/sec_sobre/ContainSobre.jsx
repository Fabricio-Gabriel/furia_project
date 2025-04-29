import React, { useRef, useEffect } from 'react';
import TxtSobre from './TxtSobre';
import ImgSobre from './ImgSobre';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const ContainSobre = () => {
  const secSobre = useRef(null);

  useEffect(() => {
    gsap.fromTo(
      secSobre.current,
      {
        x: -400, opacity: 0
      },
      {
        x: 0, 
        opacity: 1, 
        duration: 0.8,
        ease: "power2.out",
        scrollTrigger: {
          trigger: secSobre.current,
          start: 'top 80%',
        },
      }
    )
  }, []);

  return (
    <div ref={secSobre} id="sobre" className='contain-sobre w-full h-auto

    min-[1360px]:max-w-[1350px] min-[1220px]:max-w-[1200px] min-[1100px]:max-w-[1000px] min-[1000px]:max-w-[950px] max-w-[900px] 

    
    flex flex-col-reverse justify-center items-center min-[768px]:items-center min-[768px]:flex-row min-[768px]:justify-between
    
    min-[1360px]:gap-[40px] min-[1220px]:gap-[35px] gap-[15px]'>
      
        <TxtSobre />
        <ImgSobre />

    </div>
  )
}

export default ContainSobre;
