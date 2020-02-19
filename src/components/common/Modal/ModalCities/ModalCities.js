import React from 'react'
import s from './ModalCities.module.sass'
import Select from '../../inputs/Select/Select'

const ModalCities = ({setCity, cities, city}) => {
    
    return (
        <div className={s.ModalCities}>
            <span>
                <h3>Выберите город</h3>
            </span>
            <Select value={city} className='Input' onChange={setCity} >
                {cities.map((city) => (
                    <option key={city.tag} value={city.tag}>{city.name}</option>
                ))}
            </Select>
        </div>
    )
}

export default ModalCities