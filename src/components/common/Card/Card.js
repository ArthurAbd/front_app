import React from 'react'
import s from './Card.module.sass'
import iconLike from '../../../assets/icon/iconLike.svg'
import { withRouter } from "react-router"
import classNames from 'classnames'

const Card = ({cardData, setMapCenter, fetchSelectItem, history, vertical}) => {
    const {idAd, photos, price, address, area, name, origin} = cardData
    
    let img = photos.split(',')[0]

    if (!origin) {
        img = `//localhost:3001/uploads/1280_960/${img}`
    }

    return (
        <div className={classNames(s.Card, vertical && s.CardVertical)}
            onClick={() => history.push(`/room/${idAd}`)}
            onMouseEnter={() => {
                fetchSelectItem && fetchSelectItem(idAd)
                setMapCenter && setMapCenter(idAd)
            }}
            >
            <div className={s.CardImg}>
                <img src={img} alt={address} />
            </div>
            <div className={s.CardContent}>
                <div className={s.CardTitle}>{name} {area} м2</div>
                <div className={s.CardAddress}>{address}</div>
                <div className={s.CardPrice}>
                    <div>{price} Р <span> / мес.</span></div>
                    <div><img src={iconLike} alt={address} /></div>
                </div>
            </div>
        </div>
    )
}

export default withRouter(Card)