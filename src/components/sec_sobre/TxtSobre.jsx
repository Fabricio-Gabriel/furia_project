import React from 'react';
import Title from './Title';
import Paragraph from './Paragraph';
import txtFuria from '../../assets/imgs/txt-furia.png';

const TxtSobre = () => {
  return (
    <div className='md:w-[50%] w-[85%] h-auto flex flex-col items-center md:justify-between gap-[8px]'>
      <Title txt={"Conheça a "} img={txtFuria}/>

      <Paragraph 
      parag1={"Fundada em 2017, a FURIA é uma organização brasileira de e-sports conhecida por sua postura ousada e competitiva. Ganhou destaque no cenário internacional principalmente no CS:GO, onde conquistou fãs pelo estilo agressivo de jogo."}

      parag2={"A equipe expandiu para outras modalidades como League of Legends, VALORANT, e Apex Legends, mantendo sempre o foco na alta performance e identidade forte. Hoje, a FURIA é referência global, com centros de treinamento nos EUA e no Brasil, unindo paixão, disciplina e inovação dentro e fora dos servidores."}

      color={"black"}
      />
    </div>
  )
}

export default TxtSobre;
