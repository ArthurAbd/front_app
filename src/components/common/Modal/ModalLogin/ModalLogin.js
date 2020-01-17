import React from 'react'
import s from './ModalLogin.module.sass'

const ModalLogin = ({userLogin}) => {
    
    return (
        <div className={s.ModalLogin}>
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
            </form>
        </div>
    )
}

export default ModalLogin