import React from 'react'
import s from './Info.module.sass'
import Button from '../../../common/Button/Button'

const Info = (props) => {

    const {
        price,
        address,
        area,
        floor,
        floors,
        text,
        name,
        shortName,
        idAd,
        getPhoneNumber,
        isAuth,
        setModal,
        scrollToMyRef
    } = props
    
    const getPhone = (idAd) => {
        if (isAuth) {
            return getPhoneNumber(idAd)
        }
        setModal('login')
    }

    return (
        <div className={s.Info}>
            <div className={s.InfoText}>
                <div className={s.Title}>
                    <div className={s.TitleText}>
                        <h2>{name}, {area} м2</h2>
                        <span  className={s.TitleToMap} onClick={scrollToMyRef}>
                            <i className="fa fa-location-arrow fa-2x" aria-hidden="true"></i>
                            {address}
                        </span>
                    </div>
                </div>
                <div className={s.InfoStats}>
                    <div>Тип: <span>{shortName}</span></div>
                    <div>Площадь: <span>{area} м<sup>2</sup></span></div>
                    <div>Этаж: <span>{floor}/{floors}</span></div>
                </div>
                <div className={s.InfoTextContent}>
                    {text}
                </div>
            </div>

            <div className={s.InfoAutor}>
                <div className={s.AutorCard}>
                    <div className={s.InfoPrice}>
                        <span>{price}</span> руб/мес
                    </div>
                    Надежность номера: <span>высокая</span>
                    <Button size='m' onClick={() => getPhone(idAd)}>
                        Показать номер
                    </Button>
                </div>
            </div>
        </div>
    )
}

export default Info