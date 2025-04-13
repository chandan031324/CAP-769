import React from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import L from "leaflet";
import "leaflet/dist/leaflet.css";
import markerIconPng from "../Assets/busicon.png"; // ✅ Path to your image

// Create custom marker icon
const customMarker = new L.Icon({
  iconUrl: markerIconPng,
  iconSize: [30, 40],
  iconAnchor: [15, 40],
  popupAnchor: [0, -40],
});

const MapView = () => {
  return (
    <MapContainer center={[28.6139, 77.2090]} zoom={12} style={{ height: "400px", width: "100%" }}>
      <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
      
      <Marker position={[28.6139, 77.2090]} icon={customMarker}>
        <Popup>Delhi, India</Popup>
      </Marker>
    </MapContainer>
  );
};

export default MapView;
