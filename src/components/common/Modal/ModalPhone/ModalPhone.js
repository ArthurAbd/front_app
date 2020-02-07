import React from 'react'
import s from './ModalPhone.module.sass'

const ModalPhone = ({phoneNumber}) => {
    
    return (
        <>
            <div className={s.ModalPhone}>
                <h3>
                    <a href={`tel:+7${phoneNumber}`} ><i class="fa fa-phone"></i>+7{phoneNumber}</a>
                </h3>
            </div>
            <div className={s.BtnGroup}>
                <button>Посредник</button>
                <button>Собственник</button>
                <button>Не отвечает</button>
            </div>
        </>
    )
}

export default ModalPhone