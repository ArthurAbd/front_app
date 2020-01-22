import React from 'react'
import s from './ModalLogin.module.sass'

const ModalLogin = ({userLogin}) => {
    
    return (
        <>
            <div>
                <h3>Войти</h3>
            </div>
            <form onSubmit={userLogin} >
                <div>
                    <label htmlFor='number'> Телефон</label>
                    <input
                        type='text'
                        id='number'
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
        </>
    )
}

export default ModalLogin