import React from 'react'
import s from './Header.module.sass'
import iconCity from '../../assets/icon/iconCity.svg'
import { NavLink, Link } from 'react-router-dom'
import {withRouter} from "react-router-dom";
import Button from '../common/Button/Button'


const Header = ({cityName, setModal, isAuth, userLogout, history}) => {
    
    const logOut = () => {
        history.push('/')
        userLogout()
    }

    const [profileMenu, setProfileMenu] = React.useState(false)
    
    const getLink = (link) => {
        setProfileMenu(false)
        history.push(link)
    }

    const menu = (
        <div className={s.ProfileMenu} onMouseLeave={() => setProfileMenu(false)}>
            <div onClick={() => getLink('/profile/new')} >
                <Button size='m' variant='transparent'>Новое объявление</Button>
            </div>
            <div onClick={() => getLink('/profile/ads')}  >
                <Button size='m' variant='transparent'>Мои объявления</Button>
            </div>
            <div onClick={() => getLink('/profile/calls')}  >
                <Button size='m' variant='transparent'>Входящие звонки</Button>
            </div>
            <div onClick={() => getLink('/profile/edit')}  >
                <Button size='m' variant='transparent'>Настройки</Button>
            </div>
            <div onClick={logOut} className={s.Out} >
                <Button size='m' variant='transparent'>Выйти</Button>
            </div>
        </div>
    )


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
            <Link to='/profile/edit'
                onMouseOver={() => setProfileMenu(true)} >
                    <div>Кабинет</div>
            </Link>
        </div>
    )

    return (
        <div className={s.Header} onMouseLeave={() => setProfileMenu(false)} >
            <div className={s.Container}>
                {profileMenu && menu}
                <div className={s.HeaderNav}>
                    <div className={s.HeaderLogoMenu}>
                        <div className={s.Logotype}>
                            <Link to='/'>RentalRoom</Link>
                        </div>
                        <div className={s.CityMenu} onClick={() => setModal('cities')}>
                            <img src={iconCity} alt='' />
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