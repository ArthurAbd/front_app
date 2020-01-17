import React from 'react'
import s from './Header.module.sass'
import { Link } from 'react-router-dom'


const Header = (props) => {

    const {cityName, setModal, isAuth, userLogout} = props

    let userMenu = (
        <React.Fragment>
            <Link to='/login'>Логин</Link>
            <Link to='/reg'>Регистрация</Link>
            <span onClick={() => setModal('login')} >Логин</span>
            <span onClick={() => setModal('reg')} >Регистрация</span>
        </React.Fragment>
    )
    if (isAuth) {
        userMenu = (
            <React.Fragment>
                <Link to='/profile/new'>Разместить</Link>
                <Link to='/profile'>Кабинет</Link>
                <span onClick={userLogout} >Выйти</span>
            </React.Fragment>
        ) 
    }
    
    return (
        <div className={s.Header}>
            <div className={s.Select}>
                Город:
                <span onClick={() => setModal('cities')} className={s.SelectCity}>{cityName}</span>
            </div>
            <Link to=''>Главная</Link>
            <Link to='/search'>Подобрать</Link>
            {userMenu}
        </div>
    )
}

export default Header