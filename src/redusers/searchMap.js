const inicialState = {
    searchMapCoords: null, //[]
    selectItem: null, //{}
    mapCenter: null
}

const searchMap = (state = inicialState, action) => {
    switch (action.type) {
        case 'SET_COORDS':
            
            return {
                ...state,
                searchMapCoords: action.payload,
            }

        case 'SET_SELECT_ITEM':
        
            return {
                ...state,
                selectItem: action.payload
            }

        case 'DEL_SELECT_ITEM':
    
            return {
                ...state,
                selectItem: null
            }

        case 'SET_MAP_CENTER':
            const selectCard = state.searchMapCoords.find((item) => item.id === action.payload)
            const coord = [selectCard.coord_map_y, selectCard.coord_map_x]

            return {
                ...state,
                mapCenter: coord
            }
    
        default: return state
    }
}

export default searchMap