import React from 'react'
import s from './b.module.sass'
import iconCity from './assets/icon/iconCity.svg'
import sliderPrev from './assets/icon/sliderPrev.svg'
import sliderNext from './assets/icon/sliderNext.svg'
import close from './assets/icon/close.svg'
import iconLike from './assets/icon/iconLike.svg'
import iconFilter from './assets/icon/iconFilter.svg'
import cardImg from './assets/img/cardImg.jpg'
import Map from 'pigeon-maps'
import { Link } from 'react-router-dom'

const B = () => {
        
    const photos = [
        'https://a0.muscache.com/im/pictures/25625163/d4833a1c_original.jpg?aki_policy=xx_large',
        'https://a0.muscache.com/im/pictures/25624825/6ef8e934_original.jpg?aki_policy=xx_large',
        'https://a0.muscache.com/im/pictures/09cef96b-3288-4a5d-a9c5-16bc857379e9.jpg?aki_policy=xx_large',
        'https://a0.muscache.com/im/pictures/25625125/9d06ac17_original.jpg?aki_policy=xx_large',
        'https://a0.muscache.com/im/pictures/97a4b034-6bdc-43ea-b2cc-0bcbbbf211b1.jpg?aki_policy=xx_large',
        'https://a0.muscache.com/im/pictures/4bfd386a-0b8a-4ebf-8814-8cead9e20fb0.jpg?aki_policy=xx_large',
    ]

    const countPhotos = photos.length

    const firstPhoto = (
        <div className={s.PhotosBlockFirstImg} key={photos[0]} style={{ 
            backgroundImage: `url("${photos[0]}")`,
            height: '500px',
            }} />
    )
    
    const photosFromFirst = photos.slice(1, 5).map((img) => {

        return (
            <div key={img} style={{ 
                backgroundImage: `url("${img}")`,
                height: '250px',
                }} />
        )
    })

    const Slider = ({setModal, photos}) => {
        
        photos = [
            'https://a0.muscache.com/im/pictures/25625163/d4833a1c_original.jpg?aki_policy=xx_large',
            'https://a0.muscache.com/im/pictures/25624825/6ef8e934_original.jpg?aki_policy=xx_large',
            'https://a0.muscache.com/im/pictures/09cef96b-3288-4a5d-a9c5-16bc857379e9.jpg?aki_policy=xx_large',
            'https://a0.muscache.com/im/pictures/25625125/9d06ac17_original.jpg?aki_policy=xx_large',
            'https://a0.muscache.com/im/pictures/97a4b034-6bdc-43ea-b2cc-0bcbbbf211b1.jpg?aki_policy=xx_large',
            'https://a0.muscache.com/im/pictures/4bfd386a-0b8a-4ebf-8814-8cead9e20fb0.jpg?aki_policy=xx_large',
        ]

        const [photo, setPhoto] = React.useState(photos[0])
        const [counter, setCounter] = React.useState(0)
        const [touchStartX, setTouchStartX] = React.useState(0)
        const [touchMoveX, setTouchMoveX] = React.useState(0)

        React.useEffect(() => {
            document.addEventListener('keydown', keyPress)
            return function remove() {
                document.removeEventListener('keydown', keyPress)
            }
        })

        const nextPhoto = () => {
            if (photos.length - 1 <= counter) {
                setCounter(0)
                setPhoto(photos[0])
                return
            }
            setPhoto(() => photos[counter + 1])
            setCounter(() => counter + 1)
        }
        
        const prevPhoto = () => {
            if (counter === 0) {
                setCounter(photos.length - 1)
                setPhoto(photos[photos.length - 1])
                return
            }
            setPhoto(() => photos[counter - 1])
            setCounter(() => counter - 1)
        }

        const closeSlider = () => {
            setModal('')
        }

        const touches = (e) => {
            if (touchStartX > e.changedTouches[0].clientX) {
                prevPhoto()
                setTouchMoveX(0)
            }
            if (touchStartX < e.changedTouches[0].clientX) {
                nextPhoto()
                setTouchMoveX(0)
            }
        }

        const touchStart = (e) => {
            setTouchStartX(e.changedTouches[0].clientX)
        }

        const touchMove = (e) => {
            console.log(touchMoveX)
            setTouchMoveX(e.changedTouches[0].clientX - touchStartX)
        }

        const keyPress = (e) => {
            if (e.keyCode === 27) {return closeSlider()}
            if (e.keyCode === 37) {return prevPhoto()}
            if (e.keyCode === 39) {return nextPhoto()}
        }

        

        return (
            <div className={s.Slider}
                onTouchMove={touchMove}
                onTouchEnd={touches}
                onTouchStart={touchStart}
                >
                <div className={s.SliderCounter}>
                    <span>2/12</span>
                </div>
                <div className={s.SliderContainer} style={{transform: `translate(${touchMoveX}px)`}} >
                    <img src={photo} />
                </div>
                <div className={s.SliderPrev} onClick={prevPhoto}>
                    <span>
                        <img src={sliderPrev} />
                    </span>
                </div>
                <div className={s.SliderNext} onClick={nextPhoto}>
                    <span>
                        <img src={sliderNext} />
                    </span>
                </div>
                <div className={s.SliderClose} onClick={closeSlider} >
                    <img src={close} />
                </div>
            </div>
        )
    }

    

    return (
        <>
            <div className={s.Header}>
                <div className={s.Container}>
                    <div className={s.HeaderNav}>
                        <div className={s.HeaderLogoMenu}>
                            <div className={s.Logotype}>RentalRoom</div>
                            <div className={s.CityMenu}>
                                <img src={iconCity} />
                                Москва
                            </div>
                        </div>
                        <div className={s.HeaderLinks}>
                            <div className={s.active}>
                                Подобрать квартиру
                            </div>
                            <div>
                                Ответы и вопросы
                            </div>
                            <div>
                                Еще пункт
                            </div>
                        </div>
                        <div className={s.HeaderUserMenu}>
                            <div>
                                Сдать квартиру
                            </div>
                            <div>
                                <button>
                                    Войти
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className={s.RoomPage}>
                <div className={s.PhotosBlock}>
                    <div className={s.ShadowLink}>Открыть все фото</div>
                    <span className={s.PhotosBlockImgCount}>{countPhotos} фото</span>

                    <div className={s.PhotosBlockImg}>
                        {firstPhoto}
                        <div className={s.PhotosBlockImgGroup}>
                            {photosFromFirst}
                        </div>
                    </div>
                </div>
                <div className={s.Container}>
                    
                    <div className={s.Info}>
                        <div className={s.InfoText}>
                            <div className={s.Title}>
                                <div className={s.TitleText}>
                                    <h2>Сдается 1-комнатная квартира, 30 м2</h2>
                                    <span  className={s.TitleToMap} >
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
                                <div className={s.Btn}>
                                    Показать номер
                                </div>
                                Надежность номера: <span>высокая</span>
                            </div>
                        </div>
                    </div>
                    <div className={s.Map}>
                        <Map center={[50.879, 4.6997]} zoom={12} height={450} />
                    </div>
                    <div className={s.Similar}>
                        <h2>Похожие квартиры в этом районе</h2>
                        <div className={s.CardGroup}>
                            
                            <div className={s.Card}>
                                <Link
                                    to={`/room/1`}
                                ></Link>
                                
                                <div className={s.ImgContainer}>
                                    <img src='https://a0.muscache.com/im/pictures/25625163/d4833a1c_original.jpg?aki_policy=xx_large' alt='img' />
                                </div>
                                <div className={s.TextContainer}>
                                    <div className={s.Price}>
                                        {`20000 руб.`}
                                    </div>
                                    1-комнатная квартира, 30 м2
                                    <div className={s.CardAddress}>
                                        Республика Татарстан, Казань, Ленинградская ул., 22
                                    </div>
                                </div>
                            </div>
                            <div className={s.Card}>
                                <Link
                                    to={`/room/1`}
                                ></Link>
                                
                                <div className={s.ImgContainer}>
                                    <img src='https://a0.muscache.com/im/pictures/25625163/d4833a1c_original.jpg?aki_policy=xx_large' alt='img' />
                                </div>
                                <div className={s.TextContainer}>
                                    <div className={s.Price}>
                                        {`20000 руб.`}
                                    </div>
                                    1-комнатная квартира, 30 м2
                                    <div className={s.CardAddress}>
                                        Республика Татарстан, Казань, Ленинградская ул., 22
                                    </div>
                                </div>
                            </div>
                            <div className={s.Card}>
                                <Link
                                    to={`/room/1`}
                                ></Link>
                                
                                <div className={s.ImgContainer}>
                                    <img src='https://a0.muscache.com/im/pictures/25625163/d4833a1c_original.jpg?aki_policy=xx_large' alt='img' />
                                </div>
                                <div className={s.TextContainer}>
                                    <div className={s.Price}>
                                        {`20000 руб.`}
                                    </div>
                                    1-комнатная квартира, 30 м2
                                    <div className={s.CardAddress}>
                                        Республика Татарстан, Казань, Ленинградская ул., 22
                                    </div>
                                </div>
                            </div>
                            
                        </div>
                        <div className={s.ButtonContainer}>
                            <Link to='/search'>
                                <div className={s.Btn}>Найти другие квартиры</div>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default B