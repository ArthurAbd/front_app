import React from 'react'
import s from './Profile.module.sass'
import {withRouter} from "react-router-dom";

const Profile = (props) => {
    
    const {
        isAuth,
        userEdit,
    } = props

    if (!isAuth) props.history.push('/login')

    return (
        <div className={s.Profile}>
            <form>
                <div>
                    <label htmlFor='name'> Имя</label>
                    <input type='text' id="name" />
                </div>
                <div>
                    <label htmlFor='email'> E-mail</label>
                    <input type='text' id="email" />
                </div>
                <div>
                    <label htmlFor='password'> Пароль</label>
                    <input type='text' id="password" />
                </div>
                <div className={s.BtnGroup}>
                    <button type='submit' className={s.Btn}>
                        Войти
                    </button>
                </div>
                
            </form>
            
        </div>
    )
}


export default withRouter(Profile)