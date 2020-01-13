import React from 'react'
import s from './Layout.module.sass'
import Header from '../Header/Header'
import {withApiConsumer} from '../HOC/withApiConsumer'
import {connect} from 'react-redux'
import {setCity, showModal, closeModal, userLogout} from '../../actions'

const ModalCities = (props) => {
    const {setCity, cities, showModalCities, closeModal} = props
    if (!showModalCities) return null

    console.log(s)
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

    render() {
        const { accessToken,
                userLogout,
                isAuth,
                city,
                cities,
                showModalCities,
                setCity,
                showModal,
                closeModal} = this.props

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
                    userLogout={() => userLogout(accessToken)}
                    isAuth={isAuth}
                    cityName={cityMap[city]}
                    showModal={showModal}
                />
                <ModalCities
                    setCity={setCity}
                    showModalCities={showModalCities}
                    cities={cities}
                    closeModal={closeModal}
                />

                {this.props.children}
            </div>
        )
    }
}

const mapStateToProps = ({user}) => {
    return {
        accessToken: user.accessToken,
        isAuth: user.isAuth,
        city: user.city,
        cities: user.cities,
        showModalCities: user.showModalCities
    }
}

const mapDispatchToProps = (dispatch, ownProps) => {
    const {api} = ownProps
    return {
        userLogout: userLogout(api, dispatch),
        closeModal: () => dispatch(closeModal()),
        showModal: () => dispatch(showModal()),
        setCity: (city) => dispatch(setCity(city))
    }
}

export default withApiConsumer()(connect(mapStateToProps, mapDispatchToProps)(Layout))
