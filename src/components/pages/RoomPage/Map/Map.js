import React from 'react'
import s from './Map.module.sass'
import * as GMap from 'pigeon-maps'
import Marker from 'pigeon-marker'

const Map = (props) => {
    
    const {coord_map_x, coord_map_y} = props
    const mapCoord = [coord_map_y, coord_map_x]
    
    if (!coord_map_x) return null
    console.log(mapCoord)
    return (
        <div className={s.Map}>
            <GMap center={mapCoord}
                zoom={12}
                height={400}
                // onBoundsChanged={({ center, zoom, bounds, initial }) => {console.log(center, zoom, bounds, initial)}}
                >

                <Marker anchor={mapCoord}
                    payload={2}
                    // onClick={({ event, anchor, payload }) => {console.log(event, anchor, payload)}}
                    />
            </GMap>
        </div>
    )
}

export default Map