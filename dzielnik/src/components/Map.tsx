import { MapContainer, TileLayer, GeoJSON } from "react-leaflet";
import { useEffect, useState } from "react";
import "leaflet/dist/leaflet.css";

export default function Map() {
  const [geoData, setGeoData] = useState<any>(null);

  useEffect(() => {
    fetch("/dzielnice-granice.geojson")
      .then((res) => res.json())
      .then((data) => setGeoData(data));
  }, []);

  return (
    <MapContainer
      center={[52.4064, 16.9252]}
      zoom={12}
      style={{ height: "100vh", width: "100%" }}
    >
      <TileLayer
        attribution="&copy; OpenStreetMap"
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />

      {geoData && <GeoJSON data={geoData} />}
    </MapContainer>
  );
}
