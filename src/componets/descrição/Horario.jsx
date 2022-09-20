import React from 'react';
import relogio from '../../img/section2/relogio.png';

function Horario() {
  return (
    <section className="w-full max-w-[60.625rem] flex items-center justify-center mb-10 flex-col lg:flex-row  lg:max-w-[76.625rem] xl:justify-start">
      <div className="flex w-11/12 max-w-[570px] items-center  bg-[#F43127] p-4 rounded-lg ">
        <div className="bg-[#1D060533] w-16 h-16 flex justify-center items-center rounded-full md:w-[95px] md:h-[95px]">
          <img src={relogio} alt="relogio" className="min-w-8 md:w-[50px]" />
        </div>
        <div className="w-[2px] h-20 bg-[#1D060533] mx-[14px] "></div>
        <div className="flex flex-col">
          <h1 className="text-lg text-[#1D0605B0] font-LilitaOne md:text-[25px]">
            Horário de funcionamento
          </h1>
          <p className="text-sm text-[#FFFFFFD9] font-lato md:text-base md:font-black">
            Segunda a sexta: 17h00 - 23h00
          </p>
          <p className="text-sm text-[#FFFFFFD9] font-lato md:text-base md:font-black">
            Sabado a Domíngo: 18h30 - 23h00
          </p>
        </div>
      </div>
      <div className="flex flex-col items-center mt-8 lg:items-start lg:ml-[30px] lg:self-start">
        <h1 className="text-[#1D0605B0] font-lato text-lg text-center ">
          Não esqueça de marcar a gente no Instagram:
        </h1>
        <p className="font-LilitaOne text-4xl text-[#F43127]">#EMPIREBURGUE</p>
      </div>
    </section>
  );
}

export default Horario;
