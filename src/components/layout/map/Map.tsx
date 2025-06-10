import React, { useEffect, useRef } from 'react';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';

// Fix for Leaflet's default icons (common issue in React)
import markerIcon from 'leaflet/dist/images/marker-icon.png';
import markerShadow from 'leaflet/dist/images/marker-shadow.png';

type MapProps = {
  latitude: number;
  longitude: number;
  zoom?: number;
};

/**
 * Interactive map component using Leaflet.js
 * Displays a map centered at the given coordinates with a marker
 * 
 * @param {MapProps} props - Component props
 * @param {number} props.latitude - Latitude coordinate
 * @param {number} props.longitude - Longitude coordinate
 * @param {number} [props.zoom=16] - Initial zoom level
 * @returns {JSX.Element} Leaflet map container
 */
const Map: React.FC<MapProps> = ({ latitude, longitude, zoom = 16 }) => {
  const mapRef = useRef<HTMLDivElement>(null);
  const mapInstance = useRef<L.Map | null>(null);

  useEffect(() => {
    if (mapRef.current && !mapInstance.current) {
      // Set up the default icon
      const defaultIcon = L.icon({
        iconUrl: markerIcon,
        shadowUrl: markerShadow,
        iconSize: [25, 41],
        iconAnchor: [12, 41],
      });

      // Initialize the map
      mapInstance.current = L.map(mapRef.current).setView([latitude, longitude], zoom);

      // Add OpenStreetMap layer
      L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>',
      }).addTo(mapInstance.current);

      // Add marker
      L.marker([latitude, longitude], { icon: defaultIcon })
        .addTo(mapInstance.current)
        .bindPopup('Office location');
    }

    // Cleanup when component unmounts
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