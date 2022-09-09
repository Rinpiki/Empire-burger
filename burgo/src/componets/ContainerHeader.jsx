import React from 'react';
import Header from './Header';

function ContainerHeader() {
  return (
    <div className="flex w-full max-w-screenl grow justify-center backdrop-blur-sm bg-rosaClaro fixed top-0">
      <Header />
    </div>
  );
}

export default ContainerHeader;
