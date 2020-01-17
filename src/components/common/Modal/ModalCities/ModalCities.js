import React from 'react'
import s from './ModalCities.module.sass'

const ModalCities = ({setCity, cities}) => {
    
    return (
        <div className={s.ModalCities}>
            <span>
                <h3>Выберите город</h3>
            </span>
            <ul>
                {cities.map((city) => (
                    <li key={city.city} onClick={() => setCity(city.city)} >{city.name}</li>
                ))}
            </ul>
        </div>
    )
}

export default ModalCities