import React from 'react'
import s from './MyAds.module.sass'
import {withRouter} from "react-router-dom";
import Card from '../../../common/Card/Card'

const MyAds = (props) => {
    
    const {
        myAds
    } = props

    return (
        <div className={s.MyAds}>
            {!myAds && <div>Нет результатов</div>}
            {myAds && myAds.map((item) => (
                <div className={s.CallCards}>
                    <div className={s.Card}>
                        <div className={s.ImgContainer}>
                            <img src='https://92.img.avito.st/1280x960/5899029392.jpg'/>
                        </div>
                        <div className={s.CardContent}>
                            <div>
                                <h3>1-комнатная квартира, 33 м²</h3>
                            </div>
                            <div>Санкт-Петербург, Казанская ул., 2</div>
                            <div className={s.GroupBtn}>
                                <div className={s.Btn}>Изменить</div>
                                <div className={s.Btn + ' bgRed'}>Удалить</div>
                            </div>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    )
}


export default withRouter(MyAds)