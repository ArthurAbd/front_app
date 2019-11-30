import React from 'react'
import s from './Card.module.sass'
import { Link } from 'react-router-dom'

const Card = (props) => {
    return (
        <div className={s.Card}>
            <Link to='/room/1'></Link>
            <div className={s.ImgContainer}>
                <img src='http://14.img.avito.st/1280x960/6029856714.jpg' alt='img' />
            </div>
            <div className={s.TextContainer}>
                <div className={s.Price}>
                    20000 руб.
                </div>
                <div>
                    Краснодарский край, Анапа, Крымская ул., 274
                </div>
            </div>
        </div>
    )
}

export default Card