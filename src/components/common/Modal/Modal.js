import React from 'react'
import s from './Modal.module.sass'
import ModalCities from './ModalCities/ModalCities';
import ModalLogin from './ModalLogin/ModalLogin';
import ModalReg from './ModalReg/ModalReg';
import Spinner from '../../common/Spinner/Spinner';

const Modal = ({isModal, setModal, setCity, cities, userLogin, userReg, city, isLoading}) => {

    let content = null

    switch (isModal) {
        
        case 'cities':
            content = <ModalCities setCity={setCity} cities={cities} city={city} />
            break;

        case 'login':
            content = <ModalLogin userLogin={userLogin} />
            break;
    
        case 'reg':
            content = <ModalReg userReg={userReg} />
            break;
    
        case 'phone':
            content = <ModalReg userReg={userReg} />
            break;
    
        default: 
            return null
            break;
    }



    const closeModalOnBG = (e) => {
        if (e.nativeEvent.toElement === e.currentTarget) setModal(false)
    }

    return (
        <div className={s.ModalBg} onClick={closeModalOnBG} >
            {isLoading ? <Spinner /> : null}
            <div className={s.Modal}>
                <div className={s.ModalClose} onClick={() => setModal(false)}>
                    <i className="fa fa-times" aria-hidden="true"></i>
                </div>
                <div className={s.ModalLayout}>
                    {content}
                </div>
            </div>
        </div>
    )
}

export default Modal