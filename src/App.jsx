import React from 'react';
import './app.css';
import './index.css';
import FixSection from './componets/FixSection';
import ContainerHeader from './componets/ContainerHeader';
import Descricao from './componets/descrição/Descricao';
import Ofertas from './componets/Ofertas';

function App() {
  return (
    <>
      <ContainerHeader />
      <FixSection />
      <Descricao />
      <Ofertas />
    </>
  );
}

export default App;
