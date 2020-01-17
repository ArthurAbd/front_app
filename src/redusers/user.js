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
    isAuth: false,
    isLoading: false,
    isError: false,
    isModal: false,
    user: null
}

if (localStorage.getItem('city')) {
    inicialState.city = localStorage.getItem('city')
    inicialState.isModal = false
}

const user = (state = inicialState, action) => {
    console.log(action)
    switch (action.type) {

        case 'SET_USER':
            return {
                ...state,
                user: action.payload
            }

        case 'SET_IS_LOADING':
            return {
                ...state,
                isLoading: action.payload
            }

        case 'SET_AUTH':
            return {
                ...state,
                isAuth: action.payload
            }

        case 'SET_USER_MESSAGE':
            return {
                ...state,
                userMessage: action.payload
            }

        case 'SET_MODAL':
            return {
                ...state,
                isModal: action.payload
            }

        case 'SET_USER_TOKEN':
            localStorage.setItem('lifetime', Date.now() + action.payload.expires_in * 1000)
            localStorage.setItem('accessToken', action.payload.access_token)
            localStorage.setItem('refreshToken', action.payload.refresh_token)
            return {
                ...state
            }
        
        case 'DEL_USER_TOKEN':
            localStorage.removeItem('lifetime')
            localStorage.removeItem('accessToken')
            localStorage.removeItem('refreshToken')
            return {
                ...state
            }

        case 'SET_CITY':
            localStorage.setItem('city', action.payload)
            return {
                ...state,
                city: action.payload,
                isModal: false
            }

        default: return state
    }
}

export default user