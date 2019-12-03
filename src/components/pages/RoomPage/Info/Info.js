import React from 'react'
import s from './Info.module.sass'

const Info = () => {
    return (
        <div className={s.Info}>
            <div className={`${s.InfoText} TextBlock`}>
                <div className={s.InfoStats}>
                    <div><i className="fa fa-home" aria-hidden="true"></i>Тип: 1-комнатную</div>
                    <div><i className="fa fa-square-o" aria-hidden="true"></i>Площадь: 47 м²</div>
                    <div><i className="fa fa-sort-numeric-asc" aria-hidden="true"></i>Этаж: 2/3</div>
                </div>
                <div className={s.InfoTextContent}>
                    <div>
                        сдам 2к квартиру. новая мебель. теплый пол. охраняемая территория.
                        свой спуск к морю. детская площадка. продуктовый на территории.
                        без повышения на лето. я собственник.
                        в приоритете семья из 2 человек! плюс счетчики.
                        если объявление висит, значит оно актуально! 
                    </div>
                </div>
            </div>
            <div className={`${s.InfoAutor} TextBlock`}>
                <div>Алексей</div>
                <div>79165404526</div>
            </div>
        </div>
    )
}

export default Info