import React from 'react';
import TitleChat from './TitleChat';
import Paragraph from '../sec_sobre/Paragraph';
import ButtonChat from './ButtonChat';

const TxtChat = () => {
  return (
    <div className='md:w-[50%] w-[85%] h-auto flex flex-col items-center md:justify-between gap-[8px]'>
      <TitleChat />
      <Paragraph 
      
      parag1={"Torcida FURIA CS2, chegou a hora! Viva cada round com a intensidade de quem carrega o verdadeiro rugido! No novo Chat da Torcida, você comenta as jogadas, vibra em tempo real e fortalece a energia que impulsiona a FURIA rumo à vitória. Entre agora e mostre a força da nossa comunidade no Counter-Strike 2!"}
      color={"white"}
      
      />
      <ButtonChat/>
    </div>
  )
}

export default TxtChat;
