import React from 'react'
import s from './Title.module.sass'

const Title = () => {
    return (
        <div className={s.Title}>
            <div className={s.TitleText}>
                <h2>Сдаю 1-комнатную квартиру, 47 м²</h2>
                <span>
                    <i className="fa fa-location-arrow fa-2x" aria-hidden="true"></i>
                    Краснодарский край, Анапа, Крымская ул., 274
                </span>
            </div>
            <div className={s.TitlePrice}>
                20000 руб.
            </div>
        </div>
    )
}

export default Title