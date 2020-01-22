import * as api from '../services/Api'

const setCity = (e) => {
    return {
        type: 'SET_CITY',
        payload: e.target.value
    }
}

const setIsLoading = (bool) => {
    return {
        type: 'SET_IS_LOADING',
        payload: bool
    }
}

const setUserMessage = (message) => {
    return {
        type: 'SET_USER_MESSAGE',
        payload: message
    }
}

const setModal = (modal) => {
    return {
        type: 'SET_MODAL',
        payload: modal
    }
}

const setUser = (user) => {
    return {
        type: 'SET_USER',
        payload: user
    }
}

const setIsAuth = (bool) => {
    return {
        type: 'SET_AUTH',
        payload: bool
    }
}

const setUserToken = (token) => {
    return {
        type: 'SET_USER_TOKEN',
        payload: token
    }
}

const delUserToken = () => {
    return {
        type: 'DEL_USER_TOKEN',
    }
}

const userLogin = (e) => {
    return (dispatch) => {
        e.preventDefault()
        const data = {  number: e.target.number.value,
                        password: e.target.password.value}
        dispatch(setIsLoading(true))
        api.login(data)
            .then((res) => {
                dispatch(setModal(false))
                dispatch(setUserToken(res))
                dispatch(setIsAuth(true))
                dispatch(setIsLoading(false))
            })
            .catch((err) => {
                dispatch(setIsLoading(false))
                dispatch(setUserMessage(err))
            })
    }
}

const userReg = (e) => {
    return (dispatch) => {
        e.preventDefault()
        const data = {  name: e.target.name.value,
                        number: e.target.number.value,
                        password: e.target.password.value}
        dispatch(setIsLoading(true))
        api.addUser(data)
            .then((res) =>  {
                dispatch(setIsLoading(false))
                dispatch(setUserMessage(res.body))
            })
            .catch((err) => {
                dispatch(setIsLoading(false))
                dispatch(setUserMessage(err))
            })
    }
}

const userEdit = (api, dispatch) => (data) => {
    dispatch(setIsLoading(true))
    api.editUser(data)
        .then((res) =>  dispatch(setIsLoading(false)))
        .catch((err) => dispatch(setIsLoading(false)))
}

const userLogout = () => {
    return (dispatch) => {
        isLoginUser(dispatch)
        .then(() => {
            dispatch(setIsLoading(true))
            api.logout()
                .finally(() => {
                    dispatch(delUserToken())
                    dispatch(setIsLoading(false))
                    dispatch(setIsAuth(false))
                })
        })
        .catch((err) => {
            dispatch(delUserToken())
            dispatch(setIsAuth(false))
        })
    }
}

const getMe = () => {
    return (dispatch) => {
        dispatch(setIsLoading(true))
        isLoginUser(dispatch)
        .then(() => {
            api.getMe()
                .then((res) => {
                    dispatch(setIsAuth(true))
                    dispatch(setIsLoading(false))
                    dispatch(setUser(res.data.number))
                })
                .catch((err) =>{
                    dispatch(setIsLoading(false))
                    dispatch(setUserMessage(err))
                })
        })
        .catch((err) => {
            dispatch(setIsLoading(false))
            dispatch(setUserMessage(err))
        })
    }
}

const isLoginUser = (dispatch) => {
    return new Promise((resolve, reject) => {
        try {
            if (Date.now() < localStorage.getItem('lifetime') 
                && localStorage.getItem('accessToken')) {
                    dispatch(setIsAuth(true))
                    return resolve()
                }

            if (localStorage.getItem('refreshToken')) {
                api.getNewToken()
                    .then((res) => {
                        dispatch(setUserToken(res))
                        dispatch(setIsAuth(true))
                        return resolve()
                    })
                    .catch((err) => {
                        dispatch(setIsAuth(false))
                        return reject(err)
                    })
            }
            dispatch(setIsAuth(false))
            return reject()
        } catch (err) {
            reject(err)
        }
    })
}

export {
    setModal,
    getMe,
    isLoginUser,
    userLogout,
    userEdit,
    userReg,
    userLogin,
    setCity
}