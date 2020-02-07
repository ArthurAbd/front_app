import React from 'react'
import s from './Similar.module.sass'
import { Link } from 'react-router-dom'

const Similar = (props) => {

    let cards = null
    if (props.searchResult) {
        cards = props.searchResult.map((cardData, index) => {
            if (index > 3) {
                return null
            }

            const {id, img, price, address} = cardData

            return (
                <div className={s.Card} key={id}>
                    <Link
                        to={`/room/${id}`}
                    ></Link>
                    
                    <div className={s.ImgContainer}>
                        <img src={img} alt='img' />
                    </div>
                    <div className={s.TextContainer}>
                        <div className={s.Price}>
                            {`${price} руб.`}
                        </div>
                        1-комнатная квартира, 30 м2
                        <div className={s.CardAddress}>
                            {address}
                        </div>
                    </div>
                </div>
            )
        })
    }

    return (
        <div className={s.Similar}>
            {cards ? <h2>Похожие квартиры в этом районе</h2> : null}
            <div className={s.CardGroup}>
                {cards}
            </div>
            <div className={s.ButtonContainer}>
                <Link to='/search'>
                    <div className={s.Btn}>Найти другие квартиры</div>
                </Link>
            </div>
        </div>
    )
}

export default Similar