import React from 'react'
import s from './Map.module.sass'
import {Link, withRouter} from 'react-router-dom'
import { Map as LeafletMap, TileLayer, Marker, Popup } from 'react-leaflet'


const Map = ({
    setMapCenter,
    mapCenter,
    fetchSelectItem,
    selectItem,
    searchMapCoords,
    history
}) => {

    if (!mapCenter && searchMapCoords[0]) {
        const coordsFirstPoint = searchMapCoords[0]
        mapCenter = [coordsFirstPoint.coordY, coordsFirstPoint.coordX]
    }
    
    const mapHeight = window.innerHeight - 194

    const markers = searchMapCoords[0] ? searchMapCoords.map(({idAd, coordX, coordY}) => {
        return (
            <Marker position={[coordY, coordX]} onClick={() => history.push(`/room/${idAd}`)} />
    )}) : null

    if (!mapCenter) return null

    return (
        <LeafletMap style={{width: '100%', height: mapHeight}}
            center={mapCenter}
            zoom={12}
            maxZoom={18}
            zoomControl={true}
            animate={true}
            easeLinearity={0.35}
        >
            <TileLayer
                url='http://{s}.tile.osm.org/{z}/{x}/{y}.png'
            />
            {markers}
        </LeafletMap>
    )
}

export default withRouter(Map)