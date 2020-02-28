const inicialState = {
    city: '',
    cities: [
        {tag: 'moskva', name: 'Москва'},
        {tag: 'novosibirsk', name: 'Новосибирск'},
        {tag: 'ekaterinburg', name: 'Екатеринбург'},
        {tag: 'nizhniy_novgorod', name: 'Нижний новгород'},
        {tag: 'kazan', name: 'Казань'},
        {tag: 'chelyabinsk', name: 'Челябинск'},
        {tag: 'omsk', name: 'Омск'},
        {tag: 'samara', name: 'Самара'},
        {tag: 'rostov-na-donu', name: 'Ростов-на-дону'},
        {tag: 'sankt-peterburg', name: 'Санкт-петербург'},
        {tag: 'ufa', name: 'Уфа'},
        {tag: 'krasnoyarsk', name: 'Красноярск'},
        {tag: 'perm', name: 'Пермь'},
        {tag: 'voronezh', name: 'Воронеж'},
        {tag: 'volgograd', name: 'Волгоград'},
        {tag: 'krasnodar', name: 'Краснодар'},
        {tag: 'kemerovo', name: 'Кемерово'},
        {tag: 'irkutsk', name: 'Иркустк'},
        {tag: 'saratov', name: 'Саратов'},
        {tag: 'tyumen', name: 'Тюмень'},
        {tag: 'yaroslavl', name: 'Ярославль'}
    ],
    isAuth: false,
    isLoading: false,
    isError: false,
    isModal: 'cities',
    userMessage: null,
    user: null,
    myAds: null,
    inCalls: null,
}

if (localStorage.getItem('city')) {
    inicialState.city = localStorage.getItem('city')
    inicialState.isModal = false
}

if (localStorage.getItem('accessToken')) {
    inicialState.isAuth = true
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

        case 'SET_MY_ADS':
            return {
                ...state,
                myAds: action.payload,
            }

        case 'CLEAR_MY_ADS':
            return {
                ...state,
                myAds: null,
            }

        case 'SET_IN_CALLS':
            return {
                ...state,
                inCalls: action.payload,
            }

        case 'CLEAR_IN_CALLS':
            return {
                ...state,
                inCalls: null,
            }

        default: return state
    }
}

export default user