import React from 'react'
import s from './ModalMessage.module.sass'

const ModalMessage = ({userMessage}) => {
    return (
        <div className={s.ModalMessage}>
            <span>{userMessage}</span>
        </div>
    )
}

export default ModalMessage