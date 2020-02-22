const inicialState = {
    error: false,
    initialized: false,
    cityMap: {
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
}

const app = (state = inicialState, action) => {
    switch (action.type) {

        case 'SET_INITIALIZED':
            return {
                ...state,
                initialized: true,
            }
        
        case 'SET_ERROR':
            return {
                ...state,
                error: action.payload,
            }
        

        default: return state
    }
}

export default app