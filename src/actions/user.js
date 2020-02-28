import * as api from '../services/Api'
import { change, stopSubmit} from 'redux-form'
import { clearPhotos } from './index'

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

const setMyAds = (data) => {
    return {
        type: 'SET_MY_ADS',
        payload: data
    }
}

const setInCalls = (data) => {
    return {
        type: 'SET_IN_CALLS',
        payload: data
    }
}

const clearMyAds = () => {
    return {
        type: 'CLEAR_MY_ADS',
    }
}

const clearInCalls = () => {
    return {
        type: 'CLEAR_IN_CALLS',
    }
}

const userLogin = (data) => {
    return (dispatch) => {
        dispatch(setIsLoading(true))
        api.login(data)
            .then((res) => {
                dispatch(setModal(false))
                dispatch(setUserToken(res))
                dispatch(setIsAuth(true))
                dispatch(getMyData())
                dispatch(setIsLoading(false))
            })
            .catch((err) => {
                dispatch(setIsLoading(false))
                dispatch(stopSubmit('login', {_error: err}))
            })
    }
}

const userReg = (data) => {
    return (dispatch) => {
        dispatch(setUserMessage(null))
        dispatch(setIsLoading(true))
        api.addUser(data)
            .then((res) =>  {
                dispatch(setIsLoading(false))
                dispatch(setUserMessage(res))
                dispatch(setModal('message'))
            })
            .catch((err) => {
                dispatch(setIsLoading(false))
                dispatch(stopSubmit('reg', {_error: err}))
            })
    }
}

const userEdit = (data) => {
    return (dispatch) => {
        isLoginUser(dispatch)
        dispatch(setUserMessage(null))
        dispatch(setIsLoading(true))
        api.editUser(data)
            .then((res) => {
                dispatch(getMyData())
            })
            .catch((err) => {
                dispatch(setIsLoading(false))
            })
    }
}

const getMyAds = () => {
    return (dispatch) => {
        dispatch(setIsLoading(true))
        isLoginUser(dispatch)
        api.getMyAds()
            .then((res) => {
                dispatch(setMyAds(res))
                dispatch(setIsLoading(false))
            })
            .catch((err) => {
                dispatch(setMyAds([]))
                dispatch(setIsLoading(false))
            })
    }
}

const getInCalls = () => {
    return (dispatch) => {
        dispatch(setIsLoading(true))
        isLoginUser(dispatch)
        api.getInCalls()
            .then((res) => {
                dispatch(setInCalls(res))
                dispatch(setIsLoading(false))
            })
            .catch((err) => {
                dispatch(setInCalls([]))
                dispatch(setIsLoading(false))
            })
    }
}

const updateInCallRating = (data) => {
    return (dispatch) => {
        isLoginUser(dispatch)
        dispatch(setIsLoading(true))
        api.updateInCallRating(data)
            .then((res) => {
                dispatch(getInCalls())
                dispatch(setIsLoading(false))
            })
            .catch((err) => {
                dispatch(setIsLoading(false))
            })
    }
}

const removeAd = (id) => {
    return (dispatch) => {
        isLoginUser(dispatch)
        dispatch(setIsLoading(true))
        api.removeAd(id)
            .then((res) => {
                dispatch(getMyAds())
                dispatch(setIsLoading(false))
            })
            .catch((err) => {
                dispatch(setIsLoading(false))
            })
    }
}

const userLogout = () => {
    return (dispatch) => {
        isLoginUser(dispatch)
        .then(() => {
            dispatch(setIsLoading(true))
            api.logout()
                .finally(() => {
                    dispatch(delUserToken())
                    dispatch(setIsAuth(false))
                    dispatch(setIsLoading(false))
                })
        })
        .catch((err) => {
            dispatch(delUserToken())
            dispatch(setIsAuth(false))
        })
    }
}

const getMyData = () => {
    return (dispatch) => {
        dispatch(setIsLoading(true))
        isLoginUser(dispatch)
        .then(() => {
            api.getMyData()
                .then((res) => {
                    dispatch(setUser(res))
                    dispatch(setIsAuth(true))
                    dispatch(setIsLoading(false))
                })
                .catch((err) => {
                    dispatch(setIsAuth(false))
                    dispatch(setUserMessage(err))
                    dispatch(setIsLoading(false))
                })
        })
        .catch((err) => {
            dispatch(setUserMessage(err))
            dispatch(setIsLoading(false))
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
            } else {
                dispatch(setIsAuth(false))
                return reject()
            }
        } catch (err) {
            reject(err)
        }
    })
}

const changeMapCoord = ([coordY, coordX]) => {
    return (dispatch) => {
        dispatch(change('newAd', 'coordY', coordY.toFixed(6)))
        dispatch(change('newAd', 'coordX', coordX.toFixed(6)))
        api.geocode([coordX, coordY]).then((res) => {
            const address = res.response.GeoObjectCollection.featureMember[0].GeoObject.name
            dispatch(change('newAd', 'address', address))
        })
    }
}

const createAd = (data) => {
    return (dispatch) => {
        isLoginUser(dispatch)
        dispatch(setIsLoading(true))
        api.newAd(data)
        .then((res) => {
            dispatch(setUserMessage(res))
        })
        .catch((err) => {
            dispatch(setUserMessage(err))
        })
        .finally(() => {
            dispatch(clearPhotos())
            dispatch(setModal('message'))
            dispatch(setIsLoading(false))
        })
    }
}

const changePhotos = (photos) => {
    return (dispatch) => {
        dispatch(change('newAd', 'photosSmall', photos[0].join(',')))
        dispatch(change('newAd', 'photos', photos[1].join(',')))
    }
}

export {
    createAd,
    changePhotos,
    changeMapCoord,
    updateInCallRating,
    removeAd,
    clearInCalls,
    clearMyAds,
    getInCalls,
    getMyAds,
    setModal,
    getMyData,
    isLoginUser,
    userLogout,
    userEdit,
    userReg,
    userLogin,
    setCity
}