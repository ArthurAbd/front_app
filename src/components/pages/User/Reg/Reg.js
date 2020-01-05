import React from 'react'
import s from './Reg.module.sass'

const Reg = (props) => {

    const {
        textModal,
        userReg,
    } = props

    return (
        <div className={s.Reg}>
            <form onSubmit={userReg} >
                <div>
                    <label htmlFor='name'> Имя</label>
                    <input
                        type='text'
                        id='name'
                    />
                </div>
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
                    <button type="reset" className={s.Btn} >
                        Очистить
                    </button>
                    <button type='submit' className={s.Btn}>
                        Отправить
                    </button>
                </div>
                <span>{textModal}</span>
            </form>
            
        </div>
    )
}

export default Reg