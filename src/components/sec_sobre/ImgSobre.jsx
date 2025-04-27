import React from 'react';
import professor from '../../assets/imgs/professor.jpg'

const ImgSobre = () => {
  return (
    <div className='md:w-[50%] w-[85%] md:h-full'>
      <img 
        src={professor} 
        alt="Imagem Fallen"
        className='h-full object-cover' 
      />
    </div>
  )
}

export default ImgSobre;
