import React from 'react';
import maps from '../../img/section2/maps.png';
import mapspc from '../../img/section2/mapsPc.png';

function LocalMaps() {
  return (
    <section className="w-full flex items-center justify-center mb-[32px]">
      <div>
        <img src={maps} alt="mapa" className="md:hidden" />
        <img src={mapspc} alt="mapa" className="hidden md:block" />
      </div>
    </section>
  );
}

export default LocalMaps;
