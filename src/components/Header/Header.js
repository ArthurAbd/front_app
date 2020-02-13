import React from 'react'
import classNames from 'classnames'
import s from './Header.module.sass'
import iconCity from '../../assets/icon/iconCity.svg'
import { NavLink, Link } from 'react-router-dom'
import {withRouter} from "react-router-dom";
import Button from '../common/Button/Button'


const Header = (props) => {
    console.log(props)
    const {cityName, setModal, isAuth, userLogout} = props

    const userMenu = !isAuth ? (
        <div className={s.HeaderUserMenu}>
            <div className={s.UserMenuItem}
                onClick={() => setModal('login')}>
                    <Button size='m' variant='outline' >
                        Сдать квартиру
                    </Button>
            </div>
            <div onClick={() => setModal('login')}>
                <Button size='m' >
                    Войти
                </Button>
            </div>
        </div>
    ) : (
        <div className={s.HeaderUserMenu}>
            <div className={s.UserMenuItem} >
                <Link to='/profile/new'>
                    <Button size='m' variant='outline' >
                        Сдать квартиру
                    </Button>
                </Link>
            </div>
            <Link to='/profile/edit'><div>Кабинет</div></Link>
            {/* <span onClick={logOut} >Выйти</span> */}
        </div>
    )

    const logOut = () => {
        props.history.push('/')
        userLogout()
    }

    return (
        <div className={s.Header}>
            <div className={s.Container}>
                <div className={s.HeaderNav}>
                    <div className={s.HeaderLogoMenu}>
                        <div className={s.Logotype}>
                            <Link to='/'>RentalRoom</Link>
                        </div>
                        <div className={s.CityMenu} onClick={() => setModal('cities')}>
                            <img src={iconCity} />
                            {cityName}
                        </div>
                    </div>
                    <div className={s.HeaderLinks}>
                            <NavLink
                                activeClassName={s.Active}
                                to='/search'>
                                    <div>Подобрать квартиру</div>
                            </NavLink>
                            <NavLink
                                activeClassName={s.Active}
                                to='/about'>
                                    <div>О сервисе</div>
                            </NavLink>
                            <NavLink
                                activeClassName={s.Active}
                                to='/help'>
                                    <div>Помощь</div>
                            </NavLink>
                    </div>
                    {userMenu}
                </div>
            </div>
        </div>
    )
}

export default withRouter(Header)