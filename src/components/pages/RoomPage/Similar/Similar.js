import React from 'react'
import s from './Similar.module.sass'
import Card from '../../../common/Card/Card'
import { Link } from 'react-router-dom'

const Similar = (props) => {

    let cards = null
    if (props.searchResult) {
        cards = props.searchResult.map((cardData, index) => {
            if (index > 3) {
                return null
            }
            return <Card key={cardData.id} cardData={cardData} />
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