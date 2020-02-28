const inicialState = {
    photoMask: [],
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

        case 'SET_ONE_PHOTO_MASK':
            return {
                ...state,
                photoMask: [...state.photoMask, 1],
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
        
        case 'CLEAR_PHOTOS':
            return {
                ...state,
                photos: [],
                photosSmall: [],
                photoMask: [],
            }
        

        default: return state
    }
}

export default fileInput