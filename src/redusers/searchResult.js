const inicialState = {
    searchResult: [],
    loadingResult: false,
    errorResult: false
}

const searchResult = (state = inicialState, action) => {
    switch (action.type) {
        case 'FETCH_ROOMS_REQUEST':
            return {
                ...state,
                loadingResult: true,
                errorResult: false
            }
        
        
        case 'FETCH_ROOMS_SECCESS':
            return {
                searchResult: action.payload,
                loadingResult: false,
                errorResult: false
            }
        
        case 'FETCH_ROOMS_FAILURE':
            return {
                searchResult: [],
                loadingResult: false,
                errorResult: action.payload
            }

        default: return state
    }
}

export default searchResult