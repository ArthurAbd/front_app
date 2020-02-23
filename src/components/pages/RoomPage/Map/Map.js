import React from 'react'
import s from './Map.module.sass'
import { Map as LeafletMap, TileLayer, Marker } from 'react-leaflet'


const Map = ({coordX, coordY}) => {
    
    const position = [coordY, coordX]

    if (!coordX) return null
    return (
        <LeafletMap style={{width: '100%', height: '400px'}}
            center={position}
            zoom={14}
            maxZoom={18}
            attributionControl={true}
            zoomControl={true}
            doubleClickZoom={false}
            scrollWheelZoom={false}
            dragging={false}
            animate={true}
            easeLinearity={0.35}
        >
            <TileLayer
                url='http://{s}.tile.osm.org/{z}/{x}/{y}.png'
            />
            <Marker position={position}/>
        </LeafletMap>
    )
}

export default Map