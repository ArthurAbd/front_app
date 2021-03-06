import React from 'react'
import s from './Inbox.module.sass'
import {withRouter} from "react-router-dom";
import Button from '../../../common/Button/Button';

const Inbox = ({inCalls, getInCalls, clearInCalls, updateInCallRating}) => {

    React.useEffect(() => {
        if (!inCalls) {
            getInCalls()
        }

        return () => clearInCalls()
    }, [])

    const cards = inCalls && inCalls[0] && inCalls.map(({idInCall, photosSmall, number,
            rating, area, name, idAd, created
        }) => {
        
        let img = 'https://avatars.mds.yandex.net/get-pdb/1780525/ade3789a-f340-4893-aea3-a386a43e090a/s1200'
        if (photosSmall) {
            img = photosSmall.split(',')[0]
        }

        const date = (unix) => {
            const date = new Date(unix)
            return (
                date.getHours() + ':' +
                date.getMinutes() + ' ' +
                date.getDate() + '/' +
                date.getMonth() + 1 + '/' +
                date.getFullYear()
            )
        }

        return (
            <div className={s.Card} key={idInCall} >
                <div className={s.CardImg}>
                    <img src={img} alt='' />
                </div>
                <div className={s.CardContent}>
                    <div className={s.CardTitle}>{name} {area} м2</div>
                    <div className={s.Number}>Звонок с номера: +7{number}</div>
                    <div className={s.Date}>
                        <span>Дата:</span>
                        <span>{date(created)}</span>
                    </div>
                    <div className={s.CardBtn}>
                        {rating === 0 && <span>Пожалуйста оцените собеседника:</span>}
                        {rating !== 0 && <span>Вы можете изменить оценку когда захотите</span>}
                        <div>
                            <Button
                                onClick={() => updateInCallRating({
                                    idInCall: idInCall,
                                    rating: 1
                                })}
                                size='m'
                                variant='outline'
                                active={rating === 1} >
                                    Положительно
                                </Button>
                            
                            <Button
                                onClick={() => updateInCallRating({
                                    idInCall: idInCall,
                                    rating: -1
                                })}
                                size='m'
                                variant='outline'
                                active={rating === -1} >
                                    Отрицательно
                                </Button>
                        </div>
                    </div>
                </div>
            </div>
        )}
    )

    return (
        <div className={s.Inbox}>
            {inCalls && !inCalls[0] && <div>Нет результатов</div>}
            {cards}
        </div>
    )
}

export default withRouter(Inbox)