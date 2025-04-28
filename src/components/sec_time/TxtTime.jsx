import React from 'react';
import TitleTime from './TitleTime';
import Paragraph from '../sec_sobre/Paragraph.jsx';

const TxtTime = () => {
  return (
    <div className='md:w-[50%] w-[85%] h-auto flex flex-col items-center md:justify-between gap-[8px]'>

      <TitleTime />
      <Paragraph parag1={"A FURIA Esports apresenta sua nova formação para a temporada de Counter-Strike 2, misturando talento consagrado e novas forças. O lendário FalleN lidera o time, ao lado dos veteranos yuurih e KSCERATO, pilares da organização."}
      
      parag2={"As grandes novidades ficam por conta da chegada de YEKINDAR, estrela internacional, e molodoy, jovem promessa que traz ainda mais dinamismo para a equipe. Com essa line-up poderosa, a FURIA está pronta para escrever um novo capítulo de sucesso no CS2. Vamos juntos rugir mais alto do que nunca!"}

      color={"black"}
      />

    </div>
  )
}

export default TxtTime;
