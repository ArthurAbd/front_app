import React from 'react'
import s from './Info.module.sass'
import { setModal } from '../../../../actions'

const Info = (props) => {

    const {
        type,
        area,
        floor,
        floors,
        description,
        name,
        id,
        getPhoneNumber,
        isAuth,
        setModal
    } = props
    
    const getPhone = (id) => {
        if (isAuth) {
            return getPhoneNumber(id)
        }
        setModal('login')
    }

    return (
        <div className={s.Info}>
            <div className={`${s.InfoText} TextBlock`}>
                <div className={s.InfoStats}>
                    <div><i className="fa fa-home" aria-hidden="true"></i>Тип: {type}</div>
                    <div><i className="fa fa-square-o" aria-hidden="true"></i>Площадь: {area}</div>
                    <div><i className="fa fa-sort-numeric-asc" aria-hidden="true"></i>Этаж: {floor}/{floors}</div>
                </div>
                <div className={s.InfoTextContent}>
                    <div>
                        {description}
                    </div>
                </div>
            </div>
            <div className={`${s.InfoAutor} TextBlock`}>
                <div>{name}</div>
                <div className={s.Btn} onClick={() => getPhone(id)}>
                    Показать номер
                </div>
            </div>
        </div>
    )
}

export default Info