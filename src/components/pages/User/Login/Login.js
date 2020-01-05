import React from 'react'
import s from './Login.module.sass'

const Login = (props) => {

    const {
        textModal,
        userLogin
    } = props

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
                <div>
                    <button type='submit' className={s.Btn}>
                        Войти
                    </button>
                </div>
                <span>{textModal}</span>
            </form>
        </div>
    )
}

export default Login