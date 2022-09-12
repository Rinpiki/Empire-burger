import React from 'react';

function FixSection() {
  return (
    <section className="lg:justify-center items-center h-120 bg-bmobile sm:justify-start mtd:flex mtd:h-100 mtd:bg-bannerpc bg-cover bg-center bg-no-repeat w-full">
      <div className=" w-full max-w-7xl ">
        <div className="mt-20 ml-5 sm:-mt-2 lg:ml-10 lg:relative lg:right-[1%]">
          <p className="text-marrom  text-lg font-bold sm:mb-1 lg:mb-4">
            Uma nova experiência!
          </p>
          <h3 className="font-LilitaOne leading-[2.7rem] text-[43px] font-extrabold sm:text-[55px] lg:text-[78px]">
            <span className="text-marrom ">KING</span>
            <span className="ml-2 text-[#F59A1B]">BURGUER</span>
          </h3>
          <p className="text-base text-[#1D0605] sm:text-[19px] sm:mt-3 lg:text-[22px] lg:mt-8">
            Para quem tem um
            <span className="rounded-md  font-bold ml-1 bg-[#F59A1B] ">
              Apetite de um REI!
            </span>
          </p>
          <button className="text-white mt-3 rounded-md text-base py-[10px] px-5 bg-[#F43127] sm:text-xl lg:text-[22px] lg:px-6 lg:pb-3">
            Comprar Agora
          </button>
        </div>
      </div>
    </section>
  );
}

export default FixSection;
