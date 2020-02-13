const inicialState = {
    configSearch: {
        orderBy: 'created',
        order: 'desc',
        offset: 0,
        limit: 10,
        // min: '',
        // max: '',
        // type: ['r', 'st', '1k', '2k', '3k', '4k+'],
        // coordX: [-90, 90],
        // coordY: [-180, 180],
        selectSort: 'dateDesc',
        // type: null,
    }
}

const configSearch = (state = inicialState, action) => {
    switch (action.type) {
        case 'SET_TYPE_SEARCH':
            if (state.configSearch.type === action.payload) {
                return {
                    configSearch: {...state.configSearch, type: null, limit: 10}
                }
            }
            
            return {
                configSearch: {...state.configSearch, type: action.payload, limit: 10} 
            }
    
        case 'SET_SORTING_SEARCH':
            const mapSorting = {
                'dateDesc': {   orderBy: 'created',
                                order: 'desc',
                                selectSort: 'dateDesc'},
                'priceAsc': {   orderBy: 'price',
                                order: 'asc',
                                selectSort: 'priceAsc'},
                'priceDesc': {   orderBy: 'price',
                                order: 'desc',
                                selectSort: 'priceDesc'}}
            return {
                configSearch: {...state.configSearch, ...mapSorting[action.payload], limit: 10}
            }
            
        case 'SET_MIN_PRICE_SEARCH':
            if (action.payload > 0 && action.payload > 9999999) {
                return {
                    configSearch: {...state.configSearch, min: action.payload, limit: 10}
                }
            }
            return {
                configSearch: {...state.configSearch, min: 0, limit: 10}
            }
            
        case 'SET_MAX_PRICE_SEARCH':
            if (action.payload > 0 && action.payload > 9999999) {
                return {
                    configSearch: {...state.configSearch, max: action.payload, limit: 10}
                }
            }
            return {
                configSearch: {...state.configSearch, max: 9999999, limit: 10}
            }

        case 'SET_LIMIT':
            const {scrollHeight, scrollTop, clientHeight} = action.payload.currentTarget
            console.log('SET_LIMIT', action)
            if (scrollHeight - 150 > scrollTop + clientHeight ||
                state.configSearch.limit > action.total) {
                return {
                    ...state
                }
            }
            const newLimit = state.configSearch.limit + 10
            
            return {
                configSearch: {...state.configSearch, limit: newLimit}
            }

        default: return state
    }
}

export default configSearch