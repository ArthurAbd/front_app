import React from 'react'
import s from './ModalReg.module.sass'

const ModalReg = ({userReg}) => {
    
    return (
        <>
            <div>
                <h3>Регистрация</h3>
            </div>
            <form onSubmit={userReg} >
                <div>
                    <label htmlFor='name'> Имя</label>
                    <input
                        type='text'
                        id='name'
                    />
                </div>
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
                        Отправить
                    </button>
                </div>
            </form>
        </>
    )
}

export default ModalReg