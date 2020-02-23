import React from 'react'
import s from './Card.module.sass'
import iconLike from '../../../assets/icon/iconLike.svg'
import { withRouter } from "react-router"
import classNames from 'classnames'

const Card = ({cardData, setMapCenter, fetchSelectItem, history, vertical}) => {
    const {idAd, photosSmall, price, address, area, name} = cardData
    
    let img = 'https://avatars.mds.yandex.net/get-pdb/1780525/ade3789a-f340-4893-aea3-a386a43e090a/s1200'
    if (photosSmall) {
        img = photosSmall.split(',')[0]
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
                    {/* <div><img src={iconLike} alt={address} /></div> */}
                </div>
            </div>
        </div>
    )
}

export default withRouter(Card)