import React from 'react'
import s from './Map.module.sass'
import {Link} from 'react-router-dom'
import { Placemark, YMaps, Map as Maps } from 'react-yandex-maps'


const Map = ({
    setMapCenter,
    mapCenter,
    fetchSelectItem,
    selectItem,
    searchMapCoords
}) => {

    const mapRef = React.useRef(null)

    const mapHeight = window.innerHeight - 194

    const yMarkers = searchMapCoords.map(({idAd, coordX, coordY}) => {
        const markerCoord = [coordY, coordX]
        return (
            <Placemark key={idAd} geometry={markerCoord} />
        )
    })
    

    if (!mapCenter && searchMapCoords.length > 0) {
        setMapCenter(searchMapCoords[0].idAd)
        return null
    }
    

    return (
        <React.Fragment>
            <YMaps>
                <Maps 
                    instanceRef={mapRef}
                    width={'100%'} height={mapHeight}
                    state={{ center: mapCenter, zoom: 14 }}
                >
                    {yMarkers}
                </Maps>
            </YMaps>
        </React.Fragment>
    )
}

export default Map