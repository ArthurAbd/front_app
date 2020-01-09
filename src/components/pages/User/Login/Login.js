import React from 'react'
import s from './Login.module.sass'
import {withRouter} from "react-router-dom";

const Login = (props) => {

    const {
        isAuth,
        textModal,
        userLogin
    } = props

    if (isAuth) props.history.push('/profile')

    return (
        <div className={s.Login}>
            <form onSubmit={userLogin} >
                <div>
                    <label htmlFor='email'> E-mail</label>
                    <input
                        type='text'
                        id='email'
                    />
                </div>
                <div>
                    <label htmlFor='password'> Пароль</label>
                    <input
                        type='password'
                        id='password'
                    />
                </div>
                <div className={s.BtnGroup}>
                    <button type='submit' className={s.Btn}>
                        Войти
                    </button>
                </div>
                <span>{textModal}</span>
            </form>
        </div>
    )
}

export default withRouter(Login)