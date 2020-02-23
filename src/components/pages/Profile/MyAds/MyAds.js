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
    }, [])

    const cards = myAds && myAds[0] && myAds.map(({idAd, photosSmall, price, address, area, name}) => {
        
        let img = 'https://avatars.mds.yandex.net/get-pdb/1780525/ade3789a-f340-4893-aea3-a386a43e090a/s1200'
        if (photosSmall) {
            img = photosSmall.split(',')[0]
        }
        
        return (
            <div className={s.Card} key={idAd} >
                <div className={s.CardImg}>
                    <img src={img} alt={address} />
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