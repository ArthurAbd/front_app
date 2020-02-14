import React from 'react'
import s from './Similar.module.sass'
import { Link } from 'react-router-dom'
import Card from '../../../common/Card/Card'
import Button from '../../../common/Button/Button'

const Similar = (props) => {
    
    let cards = null
    if (props.searchResult) {
        cards = props.searchResult.map((cardData, index) => {
            if (index > 3) {
                return null
            }
            
            return (
                <Card cardData={cardData} vertical />
            )
        })
    }

    return (
        <div className={s.Similar}>
            {cards[0] && (
            <div>
                <h2>Похожие квартиры в этом районе</h2>
                <div className={s.CardGroup}>
                    {cards}
                </div>
            </div>
            )}

            <div className={s.ButtonContainer}>
                <Link to='/search'>
                    <Button size='l' >Найти другие квартиры</Button>
                </Link>
            </div>
        </div>
    )
}

export default Similar