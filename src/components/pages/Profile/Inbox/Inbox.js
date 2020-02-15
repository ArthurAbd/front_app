import React from 'react'
import s from './Inbox.module.sass'
import {withRouter} from "react-router-dom";

const Inbox = (props) => {

    const {
        calls
    } = props


    return (
        <div className={s.Inbox}>
            {!calls && <div>Нет результатов</div>}
            {calls && 
                calls.map((item) => (
                    <div className={s.CallCards}>
                        <div className={s.Card}>
                            <div className={s.ImgContainer}>
                                <img src='https://92.img.avito.st/1280x960/5899029392.jpg' alt='' />
                            </div>
                            <div className={s.CardContent}>
                                <div>
                                    <h3>1-комнатная квартира, 33 м²</h3>
                                </div>
                                <div>Звонок с номера +7953-XXX-77-33</div>
                                <div>11.01.2011 15:45</div>
                                <div className={s.GroupBtn}>
                                    <div className={s.Btn}>Собственник</div>
                                    <div className={s.Btn + ' bgRed'}>Посредник</div>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
        </div>
    )
}

export default withRouter(Inbox)