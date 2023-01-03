import React from 'react';
import ReactDOM from 'react-dom/client';
import { MapsApp } from './MapsApp';

import mapboxgl from 'mapbox-gl'; // or "const mapboxgl = require('mapbox-gl');"
 
mapboxgl.accessToken = 'pk.eyJ1IjoiYWxlamFuZHJvcGMiLCJhIjoiY2w3ano5aTBpMDRhcjN2cnN2bjA2ZzQzbyJ9.M_Pf8Mks8iBk-86Kcx5b5A';

if( !navigator.geolocation ) {
  alert('Tu navegador no tiene opcion de Geolocation');
  throw new Error('Tu navegador no tiene opcion de Geolocation');
}

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <MapsApp />
  </React.StrictMode>
);