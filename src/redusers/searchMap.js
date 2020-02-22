const inicialState = {
    searchMapCoords: null, //[]
    selectItem: null, //{}
    mapCenter: null
}

const searchMap = (state = inicialState, action) => {
    switch (action.type) {
        case 'SET_COORDS':
console.log(action)
            return {
                ...state,
                selectItem: null,
                mapCenter: null,
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
            
            const selectCard = state.searchMapCoords.find((item) => item.idAd === action.payload)
            const coord = [selectCard.coordY, selectCard.coordX]

            return {
                ...state,
                mapCenter: coord
            }
    
        default: return state
    }
}

export default searchMap