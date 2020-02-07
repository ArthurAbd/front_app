import React from 'react'
import s from './Header.module.sass'
import iconCity from '../../assets/icon/iconCity.svg'
import { NavLink } from 'react-router-dom'
import {withRouter} from "react-router-dom";


const Header = (props) => {

    const {cityName, setModal, isAuth, userLogout} = props

    let userMenu = (
        <div className={`${s.HeaderUserMenu} headerUserMenu`}>
            <div className={s.UserMenuItem}
                onClick={() => setModal('login')}>
                    <div>Сдать квартиру</div>
            </div>
            <div onClick={() => setModal('login')}>
                <button>
                    Войти
                </button>
            </div>
        </div>
    )

    const logOut = () => {
        props.history.push('/')
        userLogout()
    }

    if (isAuth) {
        userMenu = (
            <div className={`${s.HeaderUserMenu} headerUserMenu`}>
                    <NavLink to='/profile/new'><div>Сдать квартиру</div></NavLink>
                    <NavLink to='/profile/edit'><div>Кабинет</div></NavLink>
                {/* <span onClick={logOut} >Выйти</span> */}
            </div>
        ) 
    }


    return (
        <div className={s.Header}>
            <div className={s.Container}>
                <div className={s.HeaderNav}>
                    <div className={s.HeaderLogoMenu}>
                        <div className={s.Logotype}>
                            <NavLink to='/'>RentalRoom</NavLink>
                        </div>
                        <div className={s.CityMenu} onClick={() => setModal('cities')}>
                            <img src={iconCity} />
                            {cityName}
                        </div>
                    </div>
                    <div className={`${s.HeaderLinks} headerLinks`}>
                            <NavLink to='/search'><div>Подобрать квартиру</div></NavLink>
                        <div>
                            Ответы и вопросы
                        </div>
                        <div>
                            Еще пункт
                        </div>
                    </div>
                    {userMenu}
                </div>
            </div>
        </div>
    )
}

export default withRouter(Header)