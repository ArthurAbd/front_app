const inicialState = {
    oneRoom: null,
    loadingResult: false,
    errorResult: false,
    phoneNumber: 9531234567
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
                ...state,
                oneRoom: action.payload,
                // phoneNumber: null,
                loadingResult: false,
                errorResult: false
            }
        
        case 'FETCH_ONE_ROOM_FAILURE':
            return {
                ...state,
                oneRoom: null,
                loadingResult: false,
                errorResult: action.payload
            }
        
        case 'SET_PHONE_NUMBER':
            return {
                ...state,
                phoneNumber: action.payload
            }

        default: return state
    }
}

export default oneRoom