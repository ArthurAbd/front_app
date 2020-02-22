import React from 'react'
import s from './Map.module.sass'
import { Placemark, YMaps, Map as Maps } from 'react-yandex-maps'

const Map = ({coordX, coordY}) => {
    
    const mapCoord = [coordY, coordX]

    if (!coordX) return null
    return (
        <div className={s.Map}>
            <YMaps>
                <Maps 
                    width={'100%'} height={'400px'}
                    defaultState={{ behaviors: ['drag'], center: mapCoord, zoom: 14 }}
                >
                    <Placemark geometry={mapCoord} />
                </Maps>
            </YMaps>
        </div>
    )
}

export default Map