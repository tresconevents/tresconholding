"use client";

import { useState } from 'react';
import { GlobalFootprintContainer } from './global-footprint-container';
import { GlobalFootprintHeader } from './global-footprint-header';
import GlobalMap from './locations-list';
import { WorldMap } from './world-map';
import { locations } from '../globalFootprint_custom/locations-data';

export function GlobalFootprintSection() {
  const [activeLocationId, setActiveLocationId] = useState('india');

  return (
    <section id="our-global-footprint" className="bg-[#1E2124]  pb-[20rem]">
      <GlobalFootprintContainer>
        <GlobalFootprintHeader />
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mt-12 pb-24">
          <GlobalMap 
            activeLocationId={activeLocationId} 
            onLocationSelect={setActiveLocationId} 
          />
          <WorldMap activeLocationId={activeLocationId} />
        </div>
      </GlobalFootprintContainer>
    </section>
  );
}
