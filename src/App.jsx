import React from 'react';
import './app.css';
import './index.css';
import FixSection from './componets/FixSection';
import ContainerHeader from './componets/ContainerHeader';
import Descricao from './componets/descrição/Descricao';
import Ofertas from './componets/Ofertas';
import Horario from './componets/descrição/Horario';
import Local from './componets/local/Local';
import LocalMaps from './componets/local/LocalMaps';

function App() {
  return (
    <>
      <ContainerHeader />
      <FixSection />
      <Descricao />
      <Ofertas />
      <Horario />
      <Local />
      <LocalMaps />
    </>
  );
}

export default App;
