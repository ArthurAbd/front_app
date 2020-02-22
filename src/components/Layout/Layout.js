import React from 'react'
import s from './Layout.module.sass'
import Header from '../Header/Header'
import {connect} from 'react-redux'
import {setCity, userLogout, initialize, setModal, userLogin, userReg, updateOutCallRating} from '../../actions'
import { compose } from 'redux'
import Modal from '../common/Modal/Modal'
import Spinner from '../common/Spinner/Spinner'
import Footer from '../Footer/Footer'
import { withRouter } from 'react-router-dom'


const Layout = ({
    initialized,
    initialize,
    oneRoom,
    updateOutCallRating,
    isLoading,
    userReg,
    userLogin,
    cities,
    setCity,
    userLogout,
    isAuth,
    cityMap,
    city,
    isModal,
    setModal,
    phoneNumberData,
    userMessage,
    location,
    children
}) => {

    React.useEffect(() => {
        initialize()
    }, [])

        
    window.document.body.style.overflow = isModal ? 'hidden' : ''
    
    return (
        <>
            {(!initialized || isLoading) && <Spinner />}

            <div className={s.Layout}>

                <Header
                    userLogout={() => userLogout()}
                    isAuth={isAuth}
                    cityName={cityMap[city]}
                    setModal={setModal}
                />

            {isModal &&
                <Modal
                    photos={oneRoom && oneRoom.photos}
                    updateOutCallRating={updateOutCallRating}
                    userMessage={userMessage}
                    phoneNumberData={phoneNumberData}
                    isLoading={isLoading}
                    city={city}
                    isModal={isModal}
                    setModal={setModal}
                    cities={cities}
                    setCity={setCity}
                    userLogin={userLogin}
                    userReg={userReg}
                />}
                
                {children}

            </div>

            {location && location.pathname !== '/search' && <Footer />}
        </>
    )
}

const mapStateToProps = ({user, oneRoom, app}) => {
    return {
        cityMap: app.cityMap,
        initialized: app.initialized,
        userMessage: user.userMessage,
        phoneNumberData: oneRoom.phoneNumberData,
        isLoading: user.isLoading,
        isModal: user.isModal,
        isAuth: user.isAuth,
        city: user.city,
        cities: user.cities,
        oneRoom: oneRoom.oneRoom
    }
}

export default compose(
    withRouter,
    connect(mapStateToProps, {userLogout, setCity, initialize,
        setModal, userLogin, userReg, updateOutCallRating})
)(Layout)