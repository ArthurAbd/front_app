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
        selectType: null
    },
    searchResult: [],
    searchMap: {

    }
}

const reduser = (state = inicialState, action) => {
    // console.log(state)
    switch (action.type) {
        case 'SET_TYPE_SEARCH':
            if (state.configSearch.selectType === action.payload) {
                return {
                    ...state,
                    configSearch: {...state.configSearch, selectType: null}
                }
            }
            
            return {
                ...state,
                configSearch: {...state.configSearch, selectType: [action.payload]} 
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
                ...state,
                configSearch: {...state.configSearch, ...mapSorting[action.payload]}
            }
            
        case 'SET_MIN_PRICE_SEARCH':
            return {
                ...state,
                configSearch: {...state.configSearch, min: action.payload}
            }
            
        case 'SET_MAX_PRICE_SEARCH':
            return {
                ...state,
                configSearch: {...state.configSearch, max: action.payload}
            }

        // case 'FETCH_BOOKS_REQUEST':
        //     return {
        //         books: [],
        //         loading: true,
        //         error: null
        //     }
        
        
        case 'FETCH_ROOMS_SECCESS':
            console.log('action.payload', action.payload)
            return {
                ...state,
                searchResult: action.payload,
                // loading: true,
                // error: null
            }
        
        // case 'FETCH_ROOMS_FAILURE':
        //     return {
        //         books: [],
        //         loading: true,
        //         error: null
        //     }
        
        // case 'FETCH_BOOKS_REQUEST':
        //     return {
        //         books: [],
        //         loading: true,
        //         error: null
        //     }
        
                                
                

        default: return state
    }
}

export default reduser