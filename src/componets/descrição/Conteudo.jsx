import React from 'react';

function Conteudo({ icon, text, p, alt, id }) {
  return (
    <div id={id} className="flex items-center  w-full md:mr-5">
      <div className="bg-[#FAE2CB] p-4 flex justify-center items-center rounded-full">
        <img src={icon} alt={alt} className="min-w-8 " />
      </div>

      <div className="flex ml-4  flex-col justify-self-center w-8/12">
        <h1 className="text-[#60340B] uppercase font-bold text-xl font-LilitaOne">
          {text}
        </h1>
        <p className="text-[#1D0605B0] text-base font-lato">{p}</p>
      </div>
    </div>
  );
}

export default Conteudo;
