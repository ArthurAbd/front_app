import React from 'react'
import s from './Map.module.sass'
import * as GMap from 'pigeon-maps'
import Marker from 'pigeon-marker'

const Map = (props) => {
    
    const {coordX, coordY} = props
    const mapCoord = [coordY, coordX]
    
    if (!coordX) return null
    return (
        <div className={s.Map}>
            <GMap center={mapCoord}
                mouseEvents={false}
                touchEvents={false}
                zoom={14}
                height={400}
                >

                <Marker anchor={mapCoord}
                    payload={2}
                    />
            </GMap>
        </div>
    )
}

export default Map