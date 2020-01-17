import React from 'react'
import s from './Layout.module.sass'
import Header from '../Header/Header'
import {connect} from 'react-redux'
import {setCity, userLogout, getMe, setModal, userLogin} from '../../actions'
import { compose } from 'redux'
import Modal from '../common/Modal/Modal'

const ModalCities = (props) => {
    const {setCity, cities, showModalCities, closeModal} = props
    if (!showModalCities) return null
    return (
        <div className={s.ModalCities}>
            <div className={s.ModalContainer}>
                <div onClick={closeModal} className={s.ModalClose}>
                    <i className="fa fa-times" aria-hidden="true"></i>
                </div>
                <span>
                    <h3>Выберите город</h3>
                </span>
                <ul>
                    {cities.map((city) => (
                        <li key={city.city} onClick={() => setCity(city.city)} >{city.name}</li>
                    ))}
                </ul>
            </div>
        </div>
    )
}

class Layout extends React.Component {
    
    componentDidMount() {
        this.props.getMe()
    }

    render() {
        const { 
                userLogin,
                cities,
                setCity,
                userLogout,
                isAuth,
                city,
                isModal,
                setModal,
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

        return (
            <div className={s.Layout}>
                <Header
                    userLogout={() => userLogout()}
                    isAuth={isAuth}
                    cityName={cityMap[city]}
                    setModal={setModal}
                />

                <Modal
                    isModal={isModal}
                    setModal={setModal}
                    cities={cities}
                    setCity={setCity}
                    userLogin={userLogin}
                />
                
                {this.props.children}
            </div>
        )
    }
}

const mapStateToProps = ({user}) => {
    return {
        isModal: user.isModal,
        isAuth: user.isAuth,
        city: user.city,
        cities: user.cities,
    }
}

export default compose(connect(mapStateToProps, 
    {userLogout, setCity, getMe, setModal, userLogin})
)(Layout)