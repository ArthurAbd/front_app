import React from 'react'
// import s from './Map.module.sass'
import * as GMap from 'pigeon-maps'
import Marker from 'pigeon-marker'
import Overlay from 'pigeon-overlay'

const Map = (props) => {
    return (
        <React.Fragment>
            <GMap center={[50.879, 4.6997]}
                zoom={12}
                onBoundsChanged={({ center, zoom, bounds, initial }) => {console.log(center, zoom, bounds, initial)}}
                >

                <Marker anchor={[50.874, 4.6947]}
                    payload={2}
                    onClick={({ event, anchor, payload }) => {console.log(event, anchor, payload)}} />

                <Overlay anchor={[50.879, 4.7997]} offset={[90, 20]}>
                    <img src='https://cdn-p.cian.site/images2/6/053/267/cezar-21-kompleks-naberezhnye-chelny-jk-hod-stroitelstva-201909-762350686-6.jpg' width={100} height={80} alt='' />
                </Overlay>
            </GMap>
        </React.Fragment>
    )
}

export default Map