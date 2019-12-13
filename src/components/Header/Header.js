import React from 'react'
import s from './Header.module.sass'
import { Link } from 'react-router-dom'


const Header = (props) => {

    const {cityName, showModal} = props

    return (
        <div className={s.Header}>
            <div className={s.Select}>
                Город:
                <span onClick={showModal} className={s.SelectCity}>{cityName}</span>
            </div>
            <Link to=''>Главная</Link>
            <Link to='/search'>Подобрать</Link>
            <Link to='/login'>Логин</Link>
        </div>
    )
}

export default Header