import React from 'react';
import { MapContainer, TileLayer } from 'react-leaflet';
import './MapBox.scss';

const MapBox = () => {
    return (
        <MapContainer center={[51.505, -0.09]} zoom={3}>
            <TileLayer
                attribution='&copy; <a href="https://stadiamaps.com/">Stadia Maps</a>, &copy; <a href="https://openmaptiles.org/">OpenMapTiles</a> &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors'
                url="https://tiles.stadiamaps.com/tiles/alidade_smooth/{z}/{x}/{y}{r}.png"
            />
        </MapContainer>
    );
};

export default MapBox;