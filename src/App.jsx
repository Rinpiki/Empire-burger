import React from 'react';
import './app.css';
import './index.css';
import FixSection from './componets/FixSection';
import ContainerHeader from './componets/ContainerHeader';
import Descricao from './componets/descrição/Descricao';

function App() {
  return (
    <>
      <ContainerHeader />
      <FixSection />
      <Descricao />
    </>
  );
}

export default App;
