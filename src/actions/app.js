import { isLoginUser } from './user'


const initialize = () => {
    return (dispatch) => {
        
        isLoginUser(dispatch)
            .then(() =>  {
                
                dispatch(initializedSuccess())
            })
            .catch((err) => {
                
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