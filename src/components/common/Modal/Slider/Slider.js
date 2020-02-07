import React from 'react'
import s from './Slider.module.sass'
import sliderPrev from '../../../../assets/icon/sliderPrev.svg'
import sliderNext from '../../../../assets/icon/sliderNext.svg'
import close from '../../../../assets/icon/close.svg'


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
                <span>{`${counter + 1}/${photos.length}`}</span>
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

export default Slider