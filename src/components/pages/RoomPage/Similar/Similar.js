import React from 'react'
import s from './Similar.module.sass'
import Card from '../../common/Card/Card'

const Similar = () => {
    return (
        <div className={s.Similar}>
            <h2>Похожие квартиры в этом районе</h2>
            <div className={s.CardGroup}>
                <Card />
                <Card />
                <Card />
                <Card />
            </div>
            <div className={s.ButtonContainer}>
                <div className={s.Btn}>Найти другие квартиры</div>
            </div>
        </div>
    )
}

export default Similar