const inicialState = {
    configSearch: {
        orderBy: 'create_date',
        order: 'desc',
        offset: 0,
        limit: 10,
        min: '',
        max: '',
        // type: ['r', 'st', '1k', '2k', '3k', '4k+'],
        // coordX: [-90, 90],
        // coordY: [-180, 180],
        selectSort: 'dateDesc',
        selectType: null,
    }
}

const configSearch = (state = inicialState, action) => {
    switch (action.type) {
        case 'SET_TYPE_SEARCH':
            if (state.configSearch.selectType === action.payload) {
                return {
                    configSearch: {...state.configSearch, selectType: null, limit: 10}
                }
            }
            
            return {
                configSearch: {...state.configSearch, selectType: action.payload, limit: 10} 
            }
    
        case 'SET_SORTING_SEARCH':
            const mapSorting = {
                'dateDesc': {   orderBy: 'create_date',
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
            return {
                configSearch: {...state.configSearch, min: action.payload, limit: 10}
            }
            
        case 'SET_MAX_PRICE_SEARCH':
            return {
                configSearch: {...state.configSearch, max: action.payload, limit: 10}
            }

        case 'SET_LIMIT':
            const {scrollHeight, scrollTop, clientHeight} = action.payload.currentTarget
            console.log(action.total)
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