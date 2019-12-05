const inicialState = {
    searchMap: {}
}

const searchMap = (state = inicialState, action) => {
    switch (action.type) {
        // case 'SET_TYPE_SEARCH':
        //     if (state.configSearch.selectType === action.payload) {
        //         return {
        //             ...state,
        //             configSearch: {...state.configSearch, selectType: null}
        //         }
        //     }
            
        //     return {
        //         ...state,
        //         configSearch: {...state.configSearch, selectType: action.payload} 
        //     }
    
        default: return state
    }
}

export default searchMap