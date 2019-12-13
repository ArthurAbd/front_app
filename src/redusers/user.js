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
    isLogin: false
}

if (localStorage.getItem('city')) {
    inicialState.city = localStorage.getItem('city')
    inicialState.showModalCities = false
}

const user = (state = inicialState, action) => {
    switch (action.type) {
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