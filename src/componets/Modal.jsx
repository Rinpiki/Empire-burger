import React from 'react';

function Modal() {
  return (
    <div className="z-20 absolute top-[58px] backdrop-blur-sm left-0 bg-[#F0D8C2] -translate-x-72 animate-slide p-2 w-full sm:hidden ">
      <ul className="flex justify-center text-center flex-col items-center ">
        <li id="#">
          <a href="#" className="font-bold text-[#60340B]">
            Home
          </a>
        </li>
        <li>
          <a href="#promo">Promoção</a>
        </li>
        <li>
          <a href="#">Cardapio</a>
        </li>
        <li>
          <a href="#">Comentario</a>
        </li>
        <li>
          <a href="#">Contato</a>
        </li>
      </ul>
    </div>
  );
}

export default Modal;
