const inicialState = {
    photosSmall: [],
    photos: [],
    error: false,
    isLoading: false
}

const fileInput = (state = inicialState, action) => {
    switch (action.type) {

        case 'SET_ONE_PHOTO_SMALL':
            return {
                ...state,
                photosSmall: [...state.photosSmall, action.payload],
            }

        case 'SET_ONE_PHOTO':
            return {
                ...state,
                photos: [...state.photos, action.payload],
            }
        
        case 'SET_ERROR':
            return {
                ...state,
                error: action.payload,
            }
        
        case 'SET_LOADING':
            return {
                ...state,
                isLoading: action.payload,
            }
        

        default: return state
    }
}

export default fileInput