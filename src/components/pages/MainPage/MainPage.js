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
            </div>
            <div className={s.TitleBtn}>
                <span>Как это работает?</span>
            </div>
            <div className={s.Points}>
                <div className={s.Point}>
                    <div className={s.PointText}>
                        Регистрация
                    </div>
                    <div>
                        <div className={s.ImgContainer}>
                            <i className='fa fa-address-book fa-5x' />
                        </div>
                    </div>
                </div>
                <div className={s.Point}>
                    <div className={s.PointText}>
                        Поиск квартиры
                    </div>
                    <div>
                        <div className={s.ImgContainer}>
                            <i className='fa fa-home fa-5x' />
                        </div>
                    </div>
                </div>
                <div className={s.Point}>
                    <div className={s.PointText}>
                        Получение номера
                    </div>
                    <div>
                        <div className={s.ImgContainer}>
                            <i className='fa fa-refresh fa-5x' />
                        </div>
                    </div>
                </div>
                <div className={s.Point}>
                    <div className={s.PointText}>
                        Оценка собеседника
                    </div>
                    <div>
                        <div className={s.ImgContainer}>
                            <i className='fa fa-comment fa-5x' />
                        </div>
                    </div>
                </div>
            </div>
            <div className={s.Text}>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                </p>
            </div>
        </div>
    )
}

export default MainPage