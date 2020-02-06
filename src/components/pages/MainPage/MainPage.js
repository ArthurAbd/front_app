import React from 'react'
import s from './MainPage.module.sass'
import alvarcarto from '../../../assets/img/alvarcarto.jpg'

const MainPage = () => {
    return (
        <div className={s.MainPage}>
            <div className={s.Title} style={{background: `url(${alvarcarto}) center center no-repeat` , backgroundSize: 'cover'}}>
                <span>
                    Бесплатный сервис подбора квартир в аренду
                </span>
                <div className={s.TitleBtn}>
                    Узнать как это работает
                </div>
            </div>
            <div className={s.Points}>
                <div className={s.Point}>
                    <div className={s.PointText}>
                        Регистрация
                    </div>
                    <div>
                        <div className={s.ImgContainer}>
                            <img src='http://localhost:3000/static/media/cardImg.dcb24e10.jpg' />
                        </div>
                    </div>
                </div>
            </div>
            <div className={s.Points}>
                <div className={s.Point}>
                    <div className={s.PointText}>
                        Поиск квартиры
                    </div>
                    <div>
                        <div className={s.ImgContainer}>
                            <img src='http://localhost:3000/static/media/cardImg.dcb24e10.jpg' />
                        </div>
                    </div>
                </div>
            </div>
            <div className={s.Points}>
                <div className={s.Point}>
                    <div className={s.PointText}>
                        Получение номера
                    </div>
                    <div>
                        <div className={s.ImgContainer}>
                            <img src='http://localhost:3000/static/media/cardImg.dcb24e10.jpg' />
                        </div>
                    </div>
                </div>
            </div>
            <div className={s.Points}>
                <div className={s.Point}>
                    <div className={s.PointText}>
                        Оценка собеседника
                    </div>
                    <div>
                        <div className={s.ImgContainer}>
                            <img src='http://localhost:3000/static/media/cardImg.dcb24e10.jpg' />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default MainPage