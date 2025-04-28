import React from 'react';

const Paragraph = ({ parag1, parag2, color }) => {
  return (
    <div className={`text-${color} md:h-[85%] h-auto min-[1360px]:text-[1.3rem] 
    min-[1100px]:text-[1.2rem] min-[950px]:text-[1.1rem] 
    min-[480px]:text-[1rem] text-[0.8rem] 
    
    overflow-y-hidden`}>
      <p className='h-auto'>
        {parag1}
      </p>
        <br />
      {
        parag2
        ? <p className='h-auto'>
            {parag2}
          </p>
        : <></>
      }
      
    </div>
  )
}

export default Paragraph;
