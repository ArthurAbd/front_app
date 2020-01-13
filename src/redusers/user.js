const inicialState = {
    city: 'moskva',
    cities: [
        {city: 'moskva', name: 'Москва'},
        {city: 'sankt-peterburg', name: 'Санкт-петербург'},
        {city: 'novosibirsk', name: 'Новосибирск'},
        {city: 'ekaterinburg', name: 'Екатеринбург'},
        {city: 'nizhniy_novgorod', name: 'Нижний новгород'},
        {city: 'kazan', name: 'Казань'},
        {city: 'chelyabinsk', name: 'Челябинск'},
        {city: 'omsk', name: 'Омск'},
        {city: 'samara', name: 'Самара'},
        {city: 'rostov-na-donu', name: 'Ростов-на-дону'},
        {city: 'ufa', name: 'Уфа'},
        {city: 'krasnoyarsk', name: 'Красноярск'},
        {city: 'perm', name: 'Пермь'},
        {city: 'voronezh', name: 'Воронеж'},
        {city: 'volgograd', name: 'Волгоград'},
        {city: 'krasnodar', name: 'Краснодар'},
        {city: 'kemerovo', name: 'Кемерово'},
        {city: 'irkutsk', name: 'Иркустк'},
        {city: 'saratov', name: 'Саратов'},
        {city: 'tyumen', name: 'Тюмень'},
        {city: 'yaroslavl', name: 'Ярославль'}
    ],
    showModalCities: true,
    isAuth: false,
    isLoading: false,
    isError: false,
    textModal: '',
}

if (localStorage.getItem('city')) {
    inicialState.city = localStorage.getItem('city')
    inicialState.showModalCities = false
}

if (localStorage.getItem('accessToken') && localStorage.getItem('refreshToken')) {
    inicialState.isAuth = true
}


const user = (state = inicialState, action) => {
    console.log(action)

    switch (action.type) {

        case 'FETCH_USER_REQUEST':
            return {
                ...state,
                isLoading: true
            }

        case 'FETCH_USER_SECCESS':
            return {
                ...state,
                textModal: action.payload,
                isLoading: false
            }

        case 'FETCH_USER_FAILURE':
            return {
                ...state,
                isError: true,
                isLoading: false
            }

        case 'CLEAR_MODAL':
            return {
                ...state,
                textModal: '',
            }

        case 'SET_USER_TOKEN':
            localStorage.setItem('lifetime', Date.now() + action.payload.expires_in * 1000)
            console.log(Date.now() + action.payload.expires_in * 1000)
            localStorage.setItem('accessToken', action.payload.access_token)
            localStorage.setItem('refreshToken', action.payload.refresh_token)
            return {
                ...state,
                isAuth: true,
            }
        
        case 'DEL_USER_TOKEN':
            localStorage.removeItem('lifetime')
            localStorage.removeItem('accessToken')
            localStorage.removeItem('refreshToken')
            return {
                ...state,
                isAuth: false,
            }

        case 'SET_CITY':
            localStorage.setItem('city', action.payload)
            return {
                ...state,
                city: action.payload,
                isCity: true,
                showModalCities: false
            }
        
        case 'SHOW_MODAL':
            return {
                ...state,
                showModalCities: true
            }

        case 'CLOSE_MODAL':
            return {
                ...state,
                showModalCities: false
            }


        default: return state
    }
}

export default user