import React, { useEffect, useRef } from 'react';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';

// Fix para los iconos predeterminados de Leaflet (problema común en React)
import markerIcon from 'leaflet/dist/images/marker-icon.png';
import markerShadow from 'leaflet/dist/images/marker-shadow.png';

type MapProps = {
  latitude: number;
  longitude: number;
  zoom?: number;
};

const Map: React.FC<MapProps> = ({ latitude, longitude, zoom = 13 }) => {
  const mapRef = useRef<HTMLDivElement>(null);
  const mapInstance = useRef<L.Map | null>(null);

  useEffect(() => {
    if (mapRef.current && !mapInstance.current) {
      // Configurar el icono predeterminado
      const defaultIcon = L.icon({
        iconUrl: markerIcon,
        shadowUrl: markerShadow,
        iconSize: [25, 41],
        iconAnchor: [12, 41],
      });

      // Inicializar el mapa
      mapInstance.current = L.map(mapRef.current).setView([latitude, longitude], zoom);

      // Añadir capa de OpenStreetMap
      L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>',
      }).addTo(mapInstance.current);

      // Añadir marcador
      L.marker([latitude, longitude], { icon: defaultIcon })
        .addTo(mapInstance.current)
        .bindPopup('Ubicación de la oficina');
    }

    // Limpieza al desmontar el componente
    return () => {
      if (mapInstance.current) {
        mapInstance.current.remove();
        mapInstance.current = null;
      }
    };
  }, [latitude, longitude, zoom]);

  return <div ref={mapRef} style={{ height: '100%', width: '100%' }} />;
};

export default Map;