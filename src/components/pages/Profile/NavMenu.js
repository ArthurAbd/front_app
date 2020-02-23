import React from 'react'
import s from './Profile.module.sass'
import {NavLink} from "react-router-dom";

import Button from '../../common/Button/Button';


const NavMenu = ({logOut}) => {


    return (
        <div className={s.NavMenu}>
            <div className={s.Sticky}>
                <NavLink to='/profile/new' activeClassName={s.Active} >
                    <Button size='m' variant='transparent'>Новое объявление</Button>
                </NavLink>
                <NavLink to='/profile/ads' activeClassName={s.Active} >
                    <Button size='m' variant='transparent'>Мои объявления</Button>
                </NavLink>
                <NavLink to='/profile/calls' activeClassName={s.Active} >
                    <Button size='m' variant='transparent'>Входящие звонки</Button>
                </NavLink>
                <NavLink to='/profile/edit' activeClassName={s.Active} >
                    <Button size='m' variant='transparent'>Настройки</Button>
                </NavLink>
                <div onClick={logOut} className={s.Out} >
                    <Button size='m' variant='transparent' >Выйти</Button>
                </div>
            </div>
        </div>
    )
}

export default NavMenu