import React from 'react';

function FixSection() {
  return (
    <section className="justify-center items-center h-120 bg-bmobile mtd:flex mtd:h-100 mtd:bg-bannerpc bg-cover bg-center bg-no-repeat w-full">
      <div className="mt-20 ml-5">
        <p className="text-marrom  text-lg font-bold">Uma nova experiência!</p>
        <h3 className="font-LilitaOne leading-[2.7rem] text-[43px] font-extrabold ">
          <span className="text-marrom ">KING</span>
          <span className="ml-2 text-[#F59A1B]">BURGUER</span>
        </h3>
        <p className="text-base text-marrom ">
          Para quem tem um
          <span className="rounded-md  font-bold  bg-[#F59A1B]">
            Apetite de um REI!
          </span>
        </p>
        <button className="text-white mt-3 rounded-md text-base py-[10px] px-5 bg-[#F43127]">
          Comprar Agora
        </button>
      </div>
    </section>
  );
}

export default FixSection;
