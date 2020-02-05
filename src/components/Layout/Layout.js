import React from 'react'
import s from './Layout.module.sass'
import Header from '../Header/Header'
import {connect} from 'react-redux'
import {setCity, userLogout, getMe, setModal, userLogin, userReg} from '../../actions'
import { compose } from 'redux'
import Modal from '../common/Modal/Modal'
import Spinner from '../common/Spinner/Spinner'


class Layout extends React.Component {
    
    componentDidMount() {
        this.props.getMe()
    }

    render() {
        const { 
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
                phoneNumber,
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

        if (isLoading) return <Spinner />

        return (
            <div className={s.Layout}>
                <Header
                    userLogout={() => userLogout()}
                    isAuth={isAuth}
                    cityName={cityMap[city]}
                    setModal={setModal}
                />

                <Modal
                    phoneNumber={phoneNumber}
                    isLoading={isLoading}
                    city={city}
                    isModal={isModal}
                    setModal={setModal}
                    cities={cities}
                    setCity={setCity}
                    userLogin={userLogin}
                    userReg={userReg}
                />
                
                {isLoading ? <Spinner />: null}
                {this.props.children}
            </div>
        )
    }
}

const mapStateToProps = ({user, oneRoom}) => {
    return {
        phoneNumber: oneRoom.phoneNumber,
        isLoading: user.isLoading,
        isModal: user.isModal,
        isAuth: user.isAuth,
        city: user.city,
        cities: user.cities,
    }
}

export default compose(connect(mapStateToProps, 
    {userLogout, setCity, getMe, setModal, userLogin, userReg})
)(Layout)