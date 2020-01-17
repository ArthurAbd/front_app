import React from 'react'
import s from './MyAds.module.sass'
import {withRouter} from "react-router-dom";
import Card from '../../../common/Card/Card'

const MyAds = (props) => {
    
    const {
        setMapCenter,
        searchResult,
        isAuth
    } = props

    const cards = searchResult ? searchResult.map((item) => {
        return (
            <Card key={item.id} cardData={item} setMapCenter={setMapCenter} />
        )
    }) : (<div>Нет результатов</div>)

    if (isAuth) props.history.push('/profile')

    return (
        <div className={s.MyAds}>
            <div className={s.CardGroup}>
                {cards}
            </div>
        </div>
    )
}


export default withRouter(MyAds)