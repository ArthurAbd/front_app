import React from 'react'
import s from './Similar.module.sass'

const Similar = () => {
    return (
        <div className={s.Similar}>
            <h2>Похожие квартиры в этом районе</h2>
            <div className={s.CardGroup}>
                <div className={s.Card}>
                    <a href='127.0.0.1'></a>
                    <div className={s.ImgContainer}>
                        <img src='http://14.img.avito.st/1280x960/6029856714.jpg' alt='img' />
                    </div>
                    <div className={s.TextContainer}>
                        <div className={s.Price}>
                            20000 руб.
                        </div>
                        <div>
                            Краснодарский край, Анапа, Крымская ул., 274
                        </div>
                    </div>
                </div>
                <div className={s.Card}>
                    <a href='127.0.0.1'></a>
                    <div className={s.ImgContainer}>
                        <img src='http://14.img.avito.st/1280x960/6029856714.jpg' alt='img' />
                    </div>
                    <div className={s.TextContainer}>
                        <div className={s.Price}>
                            20000 руб.
                        </div>
                        <div>
                            Краснодарский край, Анапа, Крымская ул., 274
                        </div>
                    </div>
                </div>
                <div className={s.Card}>
                    <a href='127.0.0.1'></a>
                    <div className={s.ImgContainer}>
                        <img src='http://14.img.avito.st/1280x960/6029856714.jpg' alt='img' />
                    </div>
                    <div className={s.TextContainer}>
                        <div className={s.Price}>
                            20000 руб.
                        </div>
                        <div>
                            Краснодарский край, Анапа, Крымская ул., 274
                        </div>
                    </div>
                </div>
                <div className={s.Card}>
                    <a href='127.0.0.1'></a>
                    <div className={s.ImgContainer}>
                        <img src='http://14.img.avito.st/1280x960/6029856714.jpg' alt='img' />
                    </div>
                    <div className={s.TextContainer}>
                        <div className={s.Price}>
                            20000 руб.
                        </div>
                        <div>
                            Краснодарский край, Анапа, Крымская ул., 274
                        </div>
                    </div>
                </div>
            </div>
            <div className={s.ButtonContainer}>
                <div className={s.Btn}>Найти другие квартиры</div>
            </div>
        </div>
    )
}

export default Similar