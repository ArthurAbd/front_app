import React from 'react'
import s from './Inbox.module.sass'
import {withRouter} from "react-router-dom";

const Inbox = (props) => {

    const {
        isAuth,
    } = props

    if (isAuth) props.history.push('/profile')

    return (
        <div className={s.Inbox}>
            <div>Нет результатов</div>
        </div>
    )
}

export default withRouter(Inbox)