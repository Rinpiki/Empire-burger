import React from 'react';
import coroa from '../img/coroa.svg';
import ifood from '../img/ifood.svg';
import insta from '../img/insta.svg';
import zap from '../img/zap.svg';
import ModalMenu from './ModalMenuBtn';

function Header() {
  return (
    <header className="flex justify-between w-full max-w-7xl justify-items-center items-center py-4 px-2 mt:py-2 mt:border-b-2 mt:border-[#3C210C26]">
      <div className="flex justify-items-center items-center">
        <img src={coroa} className="w-8 h-8" />
        <h1 className="text-2xl text-marrom">
          <span className="font-bold">EMPIRE</span>{' '}
          <span className="font-semibold">BURGUE</span>
        </h1>
      </div>
      <ModalMenu />
      <ul className=" hidden sm:flex justify-items-center items-center space-x-4">
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
      <div className="hidden mt:flex justify-items-center items-center space-x-4">
        <img src={ifood} />
        <img src={insta} />
        <div className="h-12 rounded-lg w-1 bg-red-700"></div>
        <div className="flex bg-yellow-400 px-4 py-2 rounded-lg space-x-2">
          <img src={zap} />{' '}
          <h1 className=" after:content-[''] after:content- font-bold text-marrom ">
            Contato
          </h1>
        </div>
      </div>
    </header>
  );
}

export default Header;
