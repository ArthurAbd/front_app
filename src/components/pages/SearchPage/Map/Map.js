import React from 'react'
import s from './Map.module.sass'
import * as GMap from 'pigeon-maps'
import Marker from 'pigeon-marker'
import Overlay from 'pigeon-overlay'
import {Link} from 'react-router-dom'

const Map = (props) => {

    const mapHeight = window.innerHeight - 194
    debugger
    const {
        setMapCenter,
        mapCenter,
        fetchSelectItem,
        delSelectItem,
        selectItem,
        searchMapCoords
    } = props

    const markers = searchMapCoords.map(({id, coord_map_x, coord_map_y}) => {
        const markerCoord = [coord_map_y, coord_map_x]

        return (
            <Marker key={id}
                anchor={markerCoord}
                payload={id}
                onClick={({ event, anchor, payload }) => fetchSelectItem(payload)}
            />
        )
    })
    
    if (!mapCenter && searchMapCoords.length > 0) {
        setMapCenter(searchMapCoords[0].id)
        return null
    }
    
    const getOverlay = () => {
        if (!selectItem) return null

        const {id, img, price, coord_map_x, coord_map_y} = selectItem
        const coord = [coord_map_y, coord_map_x]

        return (
            <Overlay anchor={coord} offset={[125, 225]}>
                <div className={s.Overlay}>
                    <div onClick={delSelectItem} className={s.OverlayClose}>
                        <i className="fa fa-times" aria-hidden="true"></i>
                    </div>
                    
                    <Link to={`/room/${id}`}>
                        <div className={s.OverlayItem}>
                            <img src={img} alt='' />
                        </div>
                        <div>{price} руб.</div>
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