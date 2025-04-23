import { MapContainer, TileLayer, GeoJSON } from 'react-leaflet';
import { useEffect, useState } from 'react';
import { LatLngExpression } from 'leaflet';
import 'leaflet/dist/leaflet.css';

export default function Map() {
  const poznanCenter: LatLngExpression = [52.4064, 16.9252];
  const [geoData, setGeoData] = useState<any>(null);

  useEffect(() => {
    fetch('/poznan-dzielnice.geojson')
      .then(res => res.json())
      .then(data => setGeoData(data));
  }, []);

  return (
    <MapContainer center={poznanCenter} zoom={12} style={{ height: '100vh', width: '100%' }}>
      <TileLayer
        attribution='&copy; OpenStreetMap contributors'
        url='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'
      />

      {geoData && (
        <GeoJSON
          data={geoData}
          style={() => ({
            color: '#7FFF00',         // jasnozielona linia - granica?
            weight: 6,
            opacity: 1,
            fillColor: '#ffffff00',   // brak koloru wypełnienia
            fillOpacity: 0.1,
          })}
        />
      )}
    </MapContainer>
  );
}
