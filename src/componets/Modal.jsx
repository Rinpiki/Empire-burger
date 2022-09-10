import React from 'react';

function Modal() {
  return (
    <div className="z-20 absolute top-[73px] left-0 backdrop-blur-sm bg-rosaClaro -translate-x-72 animate-slide p-2 w-full sm:hidden ">
      <ul className="  flex justify-center text-center flex-col items-center ">
        <li id="#">
          <a href="#" className="font-bold text-marrom">
            Home
          </a>
        </li>
        <li>
          <a href="#">Promoção</a>
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
