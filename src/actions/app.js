import { getMyData } from './user'


const initialize = () => {
    return (dispatch) => {
        let promise = dispatch(getMyData())

        Promise.all([promise])
        .then(() => {
            dispatch(initializedSuccess())
        })
        .catch((err) => {
            dispatch(setError(err))
            dispatch(initializedSuccess())
        })
    }
}

const initializedSuccess = () => {
    return {
        type: 'SET_INITIALIZED',
    }
}

const setError = (err) => {
    return {
        type: 'SET_ERROR',
        payload: err
    }
}

export {
    initialize
}