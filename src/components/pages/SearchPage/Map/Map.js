import React from 'react'
import s from './Map.module.sass'
import * as GMap from 'pigeon-maps'
import Marker from 'pigeon-marker'
import Overlay from 'pigeon-overlay'
import {Link} from 'react-router-dom'

const Map = (props) => {

    const mapHeight = window.innerHeight - 194
    const {
        setMapCenter,
        mapCenter,
        fetchSelectItem,
        delSelectItem,
        selectItem,
        searchMapCoords
    } = props

    const markers = searchMapCoords.map(({idAd, coordX, coordY}) => {
        const markerCoord = [coordY, coordX]

        return (
            <Marker key={idAd}
                anchor={markerCoord}
                payload={idAd}
                onClick={({ event, anchor, payload }) => fetchSelectItem(payload)}
            />
        )
    })
    
    if (!mapCenter && searchMapCoords.length > 0) {
        setMapCenter(searchMapCoords[0].idAd)
        return null
    }
    
    const getOverlay = () => {
        if (!selectItem) return null

        const {idAd, price, coordX, coordY} = selectItem
        const coord = [coordY, coordX]
        
        return (
            <Overlay anchor={coord} offset={[20, 28]} >
                <div className={s.Overlay}>
                    <Link to={`/room/${idAd}`}>
                        <span>{price} руб.</span>
                    </Link>
                </div>
            </Overlay>
        )
    }

    return (
        <React.Fragment>
            <GMap center={mapCenter}
                zoom={12}
                height={mapHeight}
                onBoundsChanged={({ center, zoom, bounds, initial }) => {console.log(center, zoom, bounds, initial)}}
                >

                {markers}

                {getOverlay()}
            </GMap>
        </React.Fragment>
    )
}

export default Map