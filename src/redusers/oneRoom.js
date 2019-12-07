const inicialState = {
    oneRoom: [],
    loadingResult: false,
    errorResult: false
}

const oneRoom = (state = inicialState, action) => {
    switch (action.type) {
        case 'FETCH_ONE_ROOM_REQUEST':
            return {
                ...state,
                loadingResult: true,
            }
        
        
        case 'FETCH_ONE_ROOM_SECCESS':
            return {
                oneRoom: action.payload,
                loadingResult: false,
                errorResult: false
            }
        
        case 'FETCH_ONE_ROOM_FAILURE':
            return {
                oneRoom: [],
                loadingResult: false,
                errorResult: action.payload
            }

        default: return state
    }
}

export default oneRoom