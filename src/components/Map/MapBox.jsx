import React from 'react';
import { MapContainer, TileLayer } from 'react-leaflet';
import './MapBox.scss';

const MapBox = () => {
    return (
        <MapContainer center={[51.505, -0.09]} zoom={3}>
            <TileLayer
                attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
        </MapContainer>
    );
};

export default MapBox;