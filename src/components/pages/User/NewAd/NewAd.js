import React from 'react'
import s from './NewAd.module.sass'
import {withRouter} from "react-router-dom";


const NewAd = (props) => {
    
    const {
        isAuth
    } = props

    if (isAuth) props.history.push('/profile')

    return (
        <div className={s.NewAd}>
            <form id='NewAd'>
                <div>
                    <label htmlFor='name'>Имя</label>
                    <input type='text' id="name" />
                </div>
                <div>
                    <label htmlFor='tel'>Телефон</label>
                    <input type='tel' id="tel" />
                </div>
                <div>
                    <label htmlFor='text'>Город</label>
                    <input type='text' id="text" />
                </div>
                <div>
                    <label htmlFor='address'>Адрес</label>
                    <input type='text' id="address" />
                </div>
                <div>
                    <label htmlFor='textarea'>Описание</label>
                    <textarea form='NewAd' id="textarea" rows='10' />
                </div>
                <div className={s.BtnGroup}>
                    <button form='submit' className={s.Btn}>
                        Опубликовать
                    </button>
                </div>
            </form>
        </div>
    )
}


export default withRouter(NewAd)