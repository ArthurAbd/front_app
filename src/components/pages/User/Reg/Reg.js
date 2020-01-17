import React from 'react'
import s from './Reg.module.sass'
import {withRouter} from "react-router-dom";

const Reg = (props) => {

    const {
        isAuth,
        userReg,
    } = props

    if (isAuth) props.history.push('/profile')

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
            </form>
            
        </div>
    )
}

export default withRouter(Reg)