import React from 'react'
import s from './Modal.module.sass'
import ModalCities from './ModalCities/ModalCities';
import ModalLogin from './ModalLogin/ModalLogin';
import ModalLoginPhone from './ModalLoginPhone/ModalLoginPhone';
import ModalReg from './ModalReg/ModalReg';
import ModalPhone from './ModalPhone/ModalPhone';
import Spinner from '../../common/Spinner/Spinner';
import iconClose from '../../../assets/icon/close.svg';
import Slider from './Slider/Slider';


const Modal = ({
        photos,
        isModal,
        setModal,
        setCity,
        cities,
        userLogin,
        userReg,
        city,
        isLoading,
        phoneNumber
    }) => {
        
    let content = null

    switch (isModal) {
        
        case 'cities':
            content = <ModalCities setCity={setCity} cities={cities} city={city} />
            break;

        case 'login':
            content = <ModalLogin userLogin={userLogin} />
            break;
    
        case 'loginPhone':
            content = <ModalLoginPhone userLogin={userLogin} />
            break;
    
        case 'reg':
            content = <ModalReg userReg={userReg} />
            break;
    
        case 'phone':
            content = <ModalPhone phoneNumber={phoneNumber} />
            break;
    
        case 'slider':
            return <Slider setModal={setModal} photos={photos} />
            break;
    
        default: 
            return null
    }



    const closeModalOnBG = (e) => {
        if (e.nativeEvent.toElement === e.currentTarget) setModal(false)
    }

    return (
        <div className={s.ModalBg} onClick={closeModalOnBG} >
            {isLoading ? <Spinner /> : null}
            <div className={s.Modal}>
                <div className={s.ModalClose} onClick={() => setModal(false)}>
                    <img src={iconClose} />
                </div>
                <div className={s.ModalLayout}>
                    {content}
                </div>
            </div>
        </div>
    )
}

export default Modal