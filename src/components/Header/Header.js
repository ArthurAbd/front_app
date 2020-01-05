import React from 'react'
import s from './Header.module.sass'
import { Link } from 'react-router-dom'


const Header = (props) => {

    const {cityName, showModal, accessToken, refreshToken} = props

    let userMenu = (
        <React.Fragment>
            <Link to='/login'>Логин</Link>
            <Link to='/reg'>Регистрация</Link>
        </React.Fragment>
    )
        console.log(accessToken, refreshToken)
    if (accessToken && refreshToken) {
        userMenu = (
            <React.Fragment>
                <Link to='/profile'>Кабинет</Link>
                <Link to='/logout'>Выйти</Link>
            </React.Fragment>
        ) 
    }
    

    return (
        <div className={s.Header}>
            <div className={s.Select}>
                Город:
                <span onClick={showModal} className={s.SelectCity}>{cityName}</span>
            </div>
            <Link to=''>Главная</Link>
            <Link to='/search'>Подобрать</Link>
            {userMenu}
        </div>
    )
}

export default Header