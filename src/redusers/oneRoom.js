const inicialState = {
    oneRoom: null,
    loadingResult: false,
    errorResult: false,
    phoneNumberData: {}
}

const oneRoom = (state = inicialState, action) => {
    switch (action.type) {
        case 'ONE_ROOM_LOADING':
            return {
                ...state,
                loadingResult: action.payload,
            }
        
        
        case 'FETCH_ONE_ROOM_SECCESS':
            return {
                ...state,
                oneRoom: action.payload,
                phoneNumberData: null,
                errorResult: false
            }
        
        case 'FETCH_ONE_ROOM_FAILURE':
            return {
                ...state,
                oneRoom: null,
                errorResult: action.payload
            }
        
        case 'SET_PHONE_NUMBER_DATA':
            return {
                ...state,
                phoneNumberData: action.payload
            }

        default: return state
    }
}

export default oneRoom