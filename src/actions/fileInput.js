import * as api from '../services/Api'

const sendOnePhoto = (file) => {
    return (dispatch) => {
        dispatch(isLoading(true))
        api.sendOnePhoto(file)
            .then(({data}) =>  {
                dispatch(setOnePhoto(data))
                dispatch(isLoading(false))
            })
            .catch((err) => {
                dispatch(setError(err))
                dispatch(isLoading(false))
            })
    }
}

const setOnePhoto = (file) => {
    return {
        type: 'SET_ONE_PHOTO',
        payload: file
    }
}

const setError = (err) => {
    return {
        type: 'SET_ERROR',
        payload: err
    }
}

const isLoading = (bool) => {
    return {
        type: 'SET_LOADING',
        payload: bool
    }
}

export {
    sendOnePhoto
}