import React from 'react'
import s from './Header.module.sass'
import { Link } from 'react-router-dom'
import {withRouter} from "react-router-dom";


const Header = (props) => {

    const {cityName, setModal, isAuth, userLogout} = props

    let userMenu = (
        <React.Fragment>
            <span onClick={() => setModal('login')} >Логин</span>
            <span onClick={() => setModal('reg')} >Регистрация</span>
        </React.Fragment>
    )

    const logOut = () => {
        props.history.push('/')
        userLogout()
    }

    if (isAuth) {
        userMenu = (
            <React.Fragment>
                <Link to='/profile/new'>Разместить</Link>
                <Link to='/profile'>Кабинет</Link>
                <span onClick={logOut} >Выйти</span>
            </React.Fragment>
        ) 
    }
    
    return (
        <div className={s.Header}>
            <div className={s.Select}>
                <span onClick={() => setModal('cities')} className={s.SelectCity}>{cityName}</span>
            </div>
            <Link to=''>Главная</Link>
            <Link to='/search'>Подобрать</Link>
            {userMenu}
        </div>
    )
}

export default withRouter(Header)