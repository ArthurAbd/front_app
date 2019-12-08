const inicialState = {
    searchResult: null,
    total: null,
    loadingResult: false,
    errorResult: false
}

const searchResult = (state = inicialState, action) => {
    switch (action.type) {
        case 'FETCH_ROOMS_REQUEST':
            return {
                ...state,
                loadingResult: true,
            }
        
        
        case 'FETCH_ROOMS_SECCESS':
            const {total, result} = action.payload
            return {
                searchResult: result,
                total: total,
                loadingResult: false,
                errorResult: false
            }
        
        case 'FETCH_ROOMS_FAILURE':
            return {
                searchResult: [],
                total: null,
                loadingResult: false,
                errorResult: action.payload
            }

        default: return state
    }
}

export default searchResult