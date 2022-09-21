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
import Footer from './componets/Footer';

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
      <Footer />
    </>
  );
}

export default App;
