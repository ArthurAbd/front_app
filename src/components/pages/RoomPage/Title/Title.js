import React from 'react'
import s from './Title.module.sass'

const Title = (props) => {

    const {type, price, address, area, scrollToMyRef} = props
    
    return (
        <div className={s.Title}>
            <div className={s.TitleText}>
                <h2>Сдаю {type} квартиру, {area}</h2>
                <span  className={s.TitleToMap} onClick={scrollToMyRef} >
                    <i className="fa fa-location-arrow fa-2x" aria-hidden="true"></i>
                    {address}
                </span>
            </div>
            <div className={s.TitlePrice}>
                {price} руб.
            </div>
        </div>
    )
}

export default Title