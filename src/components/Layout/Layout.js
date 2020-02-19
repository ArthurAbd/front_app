import React from 'react'
import s from './Layout.module.sass'
import Header from '../Header/Header'
import {connect} from 'react-redux'
import {setCity, userLogout, getMe, setModal, userLogin, userReg, updateOutCallRating} from '../../actions'
import { compose } from 'redux'
import Modal from '../common/Modal/Modal'
import Spinner from '../common/Spinner/Spinner'
import Footer from '../Footer/Footer'
import { withRouter } from 'react-router-dom'


class Layout extends React.Component {
    
    componentDidMount() {
        this.props.getMe()
    }

    render() {
        const { 
                oneRoom,
                updateOutCallRating,
                isLoading,
                userReg,
                userLogin,
                cities,
                setCity,
                userLogout,
                isAuth,
                city,
                isModal,
                setModal,
                phoneNumberData,
                userMessage,
                location
            } = this.props
            
        const cityMap = {
            'moskva': 'Москва',
            'sankt-peterburg': 'Санкт-петербург',
            'novosibirsk': 'Новосибирск',
            'ekaterinburg': 'Екатеринбург',
            'nizhniy_novgorod': 'Нижний новгород',
            'kazan': 'Казань',
            'chelyabinsk': 'Челябинск',
            'omsk': 'Омск',
            'samara': 'Самара',
            'rostov-na-donu': 'Ростов-на-дону',
            'ufa': 'Уфа',
            'krasnoyarsk': 'Красноярск',
            'perm': 'Пермь',
            'voronezh': 'Воронеж',
            'volgograd': 'Волгоград',
            'krasnodar': 'Краснодар',
            'kemerovo': 'Кемерово',
            'irkutsk': 'Иркустк',
            'saratov': 'Саратов',
            'tyumen': 'Тюмень',
            'yaroslavl': 'Ярославль',
        }

        window.document.body.style.overflow = isModal ? 'hidden' : ''
        
        if (isLoading) return <Spinner />
        return (
            <>
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
                    
                    {this.props.children}

                    
                </div>
            {location && location.pathname !== '/search' && <Footer />}
            </>
        )
    }
}

const mapStateToProps = ({user, oneRoom}) => {
    return {
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
    connect(mapStateToProps, {userLogout, setCity, getMe,
        setModal, userLogin, userReg, updateOutCallRating})
)(Layout)