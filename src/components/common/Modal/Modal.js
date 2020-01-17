import React from 'react'
import s from './Modal.module.sass'
import ModalCities from './ModalCities/ModalCities';
import ModalLogin from './ModalLogin/ModalLogin';

const Modal = ({isModal, setModal, setCity, cities, userLogin}) => {

    let content = null

    switch (isModal) {
        
        case 'cities':
            content = <ModalCities setCity={setCity} cities={cities} />
            break;

        case 'login':
            content = <ModalLogin userLogin={userLogin} />
            break;
    
        default: 
            return null
            break;
    }

    return (
        <div className={s.ModalBg} >
            <div className={s.Modal}>
                <div className={s.ModalClose} onClick={() => setModal(false)}>
                    <i className="fa fa-times" aria-hidden="true"></i>
                </div>
                <div className={s.Content}>
                    {content}
                </div>
            
            </div>
        </div>
    )
}

export default Modal