import React from 'react'
import s from './NewAd.module.sass'
import * as GMap from 'pigeon-maps'
import NewAdReduxForm from './NewAdReduxForm'


const NewAd = ({createAd}) => {

    const map = (
        <GMap 
            center={[50, 35]}
            zoom={12}
            height={400}
            touchEvents={false}
            mouseEvents={false}
        >
            <div className={s.Marker}>
                <i className="fa fa-map-marker" aria-hidden="true"></i>
            </div>
        </GMap>
      )

    return (
        <div className={s.NewAd}>
            <NewAdReduxForm handleSubmit={createAd} map={map} />
        </div>
    )
}


export default NewAd