import React from 'react';
import menu from '../img/menu.svg';
import Modal from './Modal';

function ModalMenu() {
  const [modal, setModal] = React.useState(false);
  function heandleClick() {
    setModal(!modal);
    console.log('oii', modal);
  }
  return (
    <>
      <img
        src={menu}
        className="bg-marromClaro p-2 z-40 rounded-sm sm:hidden"
        onClick={heandleClick}
      />
      {modal ? <Modal /> : null}
    </>
  );
}

export default ModalMenu;
