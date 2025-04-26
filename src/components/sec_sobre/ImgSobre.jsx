import React from 'react';
import professor from '../../assets/imgs/professor.jpg'

const ImgSobre = () => {
  return (
    <div className='w-[50%] h-full bg-red-500'>
      <img 
        src={professor} 
        alt="Imagem Fallen"
        className='h-full object-cover' 
      />
    </div>
  )
}

export default ImgSobre;
