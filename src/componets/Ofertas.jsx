import React from 'react';

function Ofertas() {
  return (
    <section className="w-full max-w-[60.625rem] flex items-center justify-center xl:max-w-[76.625rem] mb-10">
      <div className="grid grid-cols-1  mt-[300px]  w-11/12 justify-center text-left gap-y-3 md:mt-32 lg:w-full md:grid-cols-6 md:gap-x-[30px] lg:gap-y-[30px] ">
        <h1 className="text-[#1D0605E5] text-2xl font-normal font-LilitaOne -mb-2 md:col-span-4 md:-mb-6 md:text-[32px] ">
          OFERTAS ESPECIAIS
        </h1>
        <p className="text-base text-[#1D0605B0] font-lato  md:col-span-4 md:-mb-4 ]">
          Aproveite todas as nossas ofertas, fiquei de olho porque sempre
          estamos mudando o nosso cardapio.
        </p>
        <div className="bg-bb rounded-lg bg-cover bg-center bg-no-repeat w-full h-52 md:h-auto md:col-span-4 row-span-6 flex flex-col p-4 justify-between">
          <div>
            <h1 className="text-xl text-white font-LilitaOne md:text-[25px]">
              BURGER PRIME+BATATA
            </h1>
            <p className="font-lato text-[20px] text-slate-200 leading-6">
              250kg
            </p>
          </div>
          <div className="self-end">
            <p className="text-[11px] text-[#FFFFFFB0] font-lato md:text-[23px]">
              Apenas
            </p>
            <span className="text-[20px] text-[#FFFFFFE5] font-LilitaOne leading-[30px] md:text-[42px] ">
              HOJE
            </span>
          </div>
        </div>
        <div className="bg-batata  rounded-lg bg-cover bg-center bg-no-repeat w-full h-52 md:h-32 lg:h-52 md:row-span-1 md:col-span-2 flex flex-col p-2 justify-between">
          <div>
            <h1 className="text-xl text-[#1D0605E5] font-LilitaOne ">BATATA</h1>
            <p className="font-lato text-[20px] text-[#1D0605B0] leading-4">
              150kg
            </p>
          </div>
        </div>
        <div className="bg-sorvete rounded-lg bg-cover bg-center bg-no-repeat w-full h-52 md:h-32 lg:h-52 md:col-span-2 md:row-span-5 flex flex-col p-3 justify-between">
          <div>
            <h1 className="text-xl text-[#1D0605E5] font-LilitaOne ">
              SORVETE
            </h1>
            <p className="font-lato text-[20px] text-[#1D0605B0] leading-4">
              50kg
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Ofertas;
