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
                        <h2>Сдается 1-комнатная квартира, 30 м2</h2>
                        <span  className={s.TitleToMap} onClick={scrollToMyRef}>
                            <i className="fa fa-location-arrow fa-2x" aria-hidden="true"></i>
                            Республика Татарстан, Казань, Ленинградская ул., 22
                        </span>
                    </div>
                </div>
                <div className={s.InfoStats}>
                    <div>Тип: <span>1-к</span></div>
                    <div>Площадь: <span>35 м<sup>2</sup></span></div>
                    <div>Этаж: <span>3/5</span></div>
                </div>
                <div className={s.InfoTextContent}>
                    This is one of the apartments in Villa Lola, located in Vaðlaheiði near Akureyri, the capital of north Iceland.
                    This is one of the apartments in Villa Lola, located in Vaðlaheiði near Akureyri, the capital of north Iceland.
                    This is one of the apartments in Villa Lola, located in Vaðlaheiði near Akureyri, the capital of north Iceland.
                    This is one of the apartments in Villa Lola, located in Vaðlaheiði near Akureyri, the capital of north Iceland.
                    This is one of the apartments in Villa Lola, located in Vaðlaheiði near Akureyri, the capital of north Iceland.
                    This is one of the apartments in Villa Lola, located in Vaðlaheiði near Akureyri, the capital of north Iceland.
                    This is one of the apartments in Villa Lola, located in Vaðlaheiði near Akureyri, the capital of north Iceland.
                    This is one of the apartments in Villa Lola, located in Vaðlaheiði near Akureyri, the capital of north Iceland.
                    This is one of the apartments in Villa Lola, located in Vaðlaheiði near Akureyri, the capital of north Iceland.
                </div>
            </div>

            <div className={s.InfoAutor}>
                <div className={s.AutorCard}>
                    <div className={s.InfoPrice}>
                        <span>20 000</span> руб/мес
                    </div>
                    <button className={s.Btn} onClick={() => getPhone(idAd)}>
                        Показать номер
                    </button>
                    Надежность номера: <span>высокая</span>
                </div>
            </div>
        </div>
    )
}

export default Info