import React from 'react'
import s from './NewAd.module.sass'
import NewAdReduxForm from './NewAdReduxForm'


const NewAd = ({createAd, city, cities, changeMapCoord, changePhotos}) => { 

    return (
        <div className={s.NewAd}>
            <NewAdReduxForm 
                initialValues={{'city': city}} changeMapCoord={changeMapCoord}
                onSubmit={createAd} city={city} cities={cities} 
                changePhotos={changePhotos} />
        </div>
    )
}


export default NewAd