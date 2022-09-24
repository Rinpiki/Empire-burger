import React from 'react';
import coreared from '../img/iconsAmaralo/coroaRed.png';
import ifoodred from '../img/iconsAmaralo/ifoodred.png';
import instared from '../img/iconsAmaralo/instared.png';

function Footer() {
  return (
    <footer className="w-full max-w-[60.625rem] flex items-center justify-center mb-8">
      <div className="flex flex-col justify-center items-center w-10/12">
        <div className="flex align-baseline">
          <img src={coreared} alt="icone de coroa" />
          <h1 className="font-lato text-3xl font-bold text-[#F59A1B]">
            EMPIRE <span className="font-normal">BURGUE</span>
          </h1>
        </div>
        <div className="flex space-x-3 border-y-2 py-[18px] border-[#1D060526] w-full my-[13px] justify-center">
          <img src={ifoodred} alt="icone do ifood" />
          <img src={instared} alt="icone do instagram" />
        </div>
        <ul className="text-center text-[#3A210B] font-lato text-[18px] border-b-2 border-[#1D060526] w-full  ">
          <li className="font-bold mb-[13px]">
            <a href="#">Home</a>
          </li>
          <li className="mb-[13px]">
            <a href="#">Localização</a>
          </li>
          <li className="mb-[13px]">
            <a href="#">Cardapio</a>
          </li>
          <li className="mb-[13px]">
            <a href="#">Sobre</a>
          </li>
        </ul>
      </div>
    </footer>
  );
}

export default Footer;
