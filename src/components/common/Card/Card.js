import React from 'react'
import s from './Card.module.sass'
import { Link } from 'react-router-dom'

const Card = ({cardData, setMapCenter}) => {
    const {id, img, price, address} = cardData
    
    return (
        <div className={s.Card}>
            <Link 
                onMouseOver={() => setMapCenter(id)}
                to={`/room/${id}`}
            ></Link>
            
            <div className={s.ImgContainer}>
                <img src={`http://${img}`} alt='img' />
            </div>
            <div className={s.TextContainer}>
                <div className={s.Price}>
                    {`${price} руб.`}
                </div>
                <div>
                    {address}
                </div>
            </div>
        </div>
    )
}

export default Card