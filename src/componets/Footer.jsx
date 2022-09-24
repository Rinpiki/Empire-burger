import React from 'react';
import coreared from '../img/iconsAmaralo/coroaRed.png';
import ifoodred from '../img/iconsAmaralo/ifoodred.png';
import instared from '../img/iconsAmaralo/instared.png';

function Footer() {
  return (
    <footer className="w-full max-w-[60.625rem] flex items-center justify-center mb-8 md:max-w-full flex-col">
      <div className="flex flex-col justify-center items-center w-10/12 md:flex-row md:justify-between md:w-11/12 md:border-b-2 md:border-[#1D060526] pb-3">
        <div className="flex items-baseline">
          <img src={coreared} alt="icone de coroa" />
          <h1 className="font-lato text-2xl p5:text-3xl font-bold ml-1 text-[#F59A1B] md:flex">
            EMPIRE <span className="font-normal ">BURGUE</span>
          </h1>
        </div>
        <div className="flex space-x-3 border-y-2 py-[18px] border-[#1D060526] w-full my-[13px] justify-center md:hidden">
          <img src={ifoodred} alt="icone do ifood" />
          <img src={instared} alt="icone do instagram" />
        </div>
        <ul className="text-center text-[#3A210B] font-lato text-[18px] border-b-2 border-[#1D060526] w-full md:border-none md:flex md:space-x-8 md:w-auto">
          <li className="font-bold mb-[13px] md:mb-0">
            <a href="#">Home</a>
          </li>
          <li className="mb-[13px] md:mb-0 ">
            <a href="#">Localização</a>
          </li>
          <li className="mb-[13px] md:mb-0">
            <a href="#">Cardapio</a>
          </li>
          <li className="mb-[13px] md:mb-0">
            <a href="#">Sobre</a>
          </li>
        </ul>
        <div className="hidden space-x-3 py-[18px] border-[#1D060526] w-full my-[13px] justify-center md:flex md:my-0 md:w-auto">
          <img src={ifoodred} alt="icone do ifood" />
          <img src={instared} alt="icone do instagram" />
        </div>
      </div>
      <h1 className="text-[#020E1F4D] font-bold mt-2 text-center text-sm">
        <span className="text-[#020E1FB0] mr-2">2022 © EmpireBurger.</span>
        Todos os direitos reservados.
      </h1>
    </footer>
  );
}

export default Footer;
