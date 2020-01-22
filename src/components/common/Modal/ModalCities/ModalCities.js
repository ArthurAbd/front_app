import React from 'react'
import s from './ModalCities.module.sass'

const ModalCities = ({setCity, cities, city}) => {
    
    return (
        <div className={s.ModalCities}>
            <span>
                <h3>Выберите город</h3>
            </span>
            <select value={city} className='Input' onChange={setCity} >
                {cities.map((city) => (
                    <option key={city.city} value={city.city}>{city.name}</option>
                ))}
            </select>
        </div>
    )
}

export default ModalCities