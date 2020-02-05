import React from 'react'
import s from './ModalPhone.module.sass'

const ModalPhone = ({phoneNumber}) => {
    
    return (
        <>
            <div>
                <h3>{phoneNumber}</h3>
            </div>
            <button>Посредник</button>
            <button>Собственник</button>
            <button>Закрыть</button>
        </>
    )
}

export default ModalPhone