import React from 'react';

function Ofertas() {
  return (
    <section className="w-full max-w-[60.625rem] flex items-center justify-center xl:max-w-[76.625rem]">
      <div className="grid grid-cols-1  mt-[300px]  w-11/12 justify-center text-left gap-y-4 md:mt-32 lg:w-full md:grid-cols-6 md:gap-x-[30px] lg:gap-y-[30px] ">
        <h1 className="text-[#1D0605E5] text-2xl font-normal font-LilitaOne -mb-4 md:col-span-4">
          OFERTAS ESPECIAIS
        </h1>
        <p className="text-base text-[#1D0605B0] font-lato md:col-span-4">
          Aproveite todas as nossas ofertas, fiquei de olho porque sempre
          estamos mudando o nosso cardapio.
        </p>
        <div className="bg-[url('assets/ofertas/burgue.png')] rounded-lg bg-cover bg-center bg-no-repeat w-full h-52 md:h-auto md:col-span-4 row-span-6 ">
          maoooo
        </div>
        <div className="bg-[url('assets/ofertas/batata.png')]  rounded-lg bg-cover bg-center bg-no-repeat w-full h-52 md:h-32 lg:h-52 md:row-span-1 md:col-span-2"></div>
        <div className="bg-[url('assets/ofertas/sorvete.png')] rounded-lg bg-cover bg-center bg-no-repeat w-full h-52 md:h-32 lg:h-52 md:col-span-2 md:row-span-5"></div>
      </div>
    </section>
  );
}

export default Ofertas;
