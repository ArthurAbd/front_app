import * as api from '../services/Api'
import { isLoginUser } from './user'

const sendOnePhoto = (file) => {
    return (dispatch) => {
        isLoginUser(dispatch)
        dispatch(isLoading(true))
        api.sendOnePhoto(file)
            .then(({data}) =>  {
                dispatch(setOnePhotoSmall(data[0]))
                dispatch(setOnePhoto(data[1]))
                dispatch(isLoading(false))
            })
            .catch((err) => {
                dispatch(setError(err))
                dispatch(isLoading(false))
            })
    }
}

const setOnePhotoSmall = (file) => {
    return {
        type: 'SET_ONE_PHOTO_SMALL',
        payload: file
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