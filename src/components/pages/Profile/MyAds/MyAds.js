import React from 'react'
import s from './MyAds.module.sass'
import {withRouter} from "react-router-dom";
import Button from '../../../common/Button/Button';

const MyAds = ({myAds, getMyAds, clearMyAds, removeAd}) => {

    
    React.useEffect(() => {
        if (!myAds) {
            getMyAds()
        }

        return () => clearMyAds()
    })

    const cards = myAds && myAds[0] && myAds.map(({idAd, photos, price, address, area, name}) => {
        const img = photos.split(',')[0]
        
        return (
            <div className={s.Card} key={idAd} >
                <div className={s.CardImg}>
                    <img src={`//localhost:3001/uploads/1280_960/${img}`} alt={address} />
                </div>
                <div className={s.CardContent}>
                    <div className={s.CardTitle}>{name} {area} м2</div>
                    <div className={s.CardAddress}>{address}</div>
                    <div className={s.CardPrice}>
                        <div>{price} Р <span> / мес.</span></div>
                    </div>
                    <div className={s.CardBtn}>
                        <Button size='m' disabled >Редактировать</Button>
                        <Button size='m' variant='outline'
                            onClick={() => removeAd(idAd)} >Удалить</Button>
                    </div>
                </div>
            </div>
        )}
    )

    return (
        <div className={s.MyAds}>
            {myAds && !myAds[0] && <div>Нет результатов</div>}
            {cards}
        </div>
    )
}


export default withRouter(MyAds)