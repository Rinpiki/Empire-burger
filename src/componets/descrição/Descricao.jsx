import React from 'react';
import Conteudo from './Conteudo';
import burgue from '../../img/section2/iconburgue.png';
import call from '../../img/section2/iconcall.png';
import moto from '../../img/section2/iconmoto.png';

function Descricao() {
  return (
    <section className="w-full max-w-[60.625rem] flex items-center justify-center absolute top-[38rem] sm:top-[31rem] ">
      <div className="flex flex-col sm:flex-row w-[95%] p-5 space-y-4 bg-white rounded-lg sm:space-y-0 sm:p-2 ">
        <Conteudo
          icon={burgue}
          text="Artesanal"
          p="Nossas receitas são feitas com todo cuidado"
          alt="icone de burgue"
        />
        <Conteudo
          className="border-y-4"
          icon={call}
          text="Atendimento"
          p="Totalmente personalizado"
          alt="icone de callcenter"
          id="divisa"
        />
        <Conteudo
          icon={moto}
          text="DELIVERY Speed"
          p="Entregamos menos de 45 minutos"
          alt="icone de moto"
        />
      </div>
    </section>
  );
}

export default Descricao;
