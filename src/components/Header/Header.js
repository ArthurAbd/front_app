import React from 'react'
import s from './Header.module.sass'
import { Link } from 'react-router-dom'

const Header = (props) => {
    return (
        <div className={s.Header}>
            <Link to='/'>Главная</Link>
            <Link to='/search'>Подобрать</Link>
            <Link to='/room'>/room</Link>
        </div>
    )
}

export default Header