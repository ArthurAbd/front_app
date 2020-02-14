import React from 'react'
import s from './Slider.module.sass'
import sliderPrev from '../../../../assets/icon/sliderPrev.svg'
import sliderNext from '../../../../assets/icon/sliderNext.svg'
import close from '../../../../assets/icon/close.svg'


const Slider = ({setModal, photos}) => {

    const photosArr = photos.split(',')

    const [photo, setPhoto] = React.useState(photosArr[0])
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
        if (photosArr.length - 1 <= counter) {
            setCounter(0)
            setPhoto(photosArr[0])
            return
        }
        setPhoto(() => photosArr[counter + 1])
        setCounter(() => counter + 1)
    }
    
    const prevPhoto = () => {
        if (counter === 0) {
            setCounter(photosArr.length - 1)
            setPhoto(photosArr[photosArr.length - 1])
            return
        }
        setPhoto(() => photosArr[counter - 1])
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
                <span>{`${counter + 1}/${photosArr.length}`}</span>
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