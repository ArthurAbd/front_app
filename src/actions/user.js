const setCity = (city) => {
    return {
        type: 'SET_CITY',
        payload: city
    }
}

const showModal = () => {
    return {
        type: 'SHOW_MODAL'
    }
}

const closeModal = () => {
    return {
        type: 'CLOSE_MODAL'
    }
}

const userRequested = () => {
    return {
        type: 'FETCH_USER_REQUEST'
    }
}

const userLoaded = (res) => {
    return {
        type: 'FETCH_USER_SECCESS',
        payload: res
    }
}

const userError = (error) => {
    return {
        type: 'FETCH_USER_FAILURE',
        payload: error
    }
}

const clearModal = () => {
    return {
        type: 'CLEAR_MODAL'
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

const userLogin = (api, dispatch) => (e) => {
    e.preventDefault()
    const data = {  email: e.target.email.value,
                    password: e.target.password.value}
    dispatch(userRequested())
    api.login(data)
        .then((res) => {
            dispatch(setUserToken(res))
            dispatch(userLoaded(''))
        })
        .catch((err) => {
            dispatch(userError(err))
            setTimeout(() => dispatch(clearModal()), 2000)
        })
}

const userReg = (api, dispatch) => (e) => {
    e.preventDefault()
    const data = {  name: e.target.name.value,
                    email: e.target.email.value,
                    password: e.target.password.value}
    dispatch(userRequested())
    api.addUser(data)
        .then((res) =>  {
            dispatch(userLoaded(res))
            setTimeout(() => dispatch(clearModal()), 2000)
        })
        .catch((err) => {
            dispatch(userError(err))
            setTimeout(() => dispatch(clearModal()), 2000)
        })
}

const userEdit = (api, dispatch) => (data) => {
    dispatch(userRequested())
    api.editUser(data)
        .then((res) =>  dispatch(userLoaded(res)))
        .catch((err) => dispatch(userError(err)))
}

const userLogout = (api, dispatch) => (accessToken) => {
    const token = {access_token: accessToken}
    dispatch(userRequested())
    api.logout(token)
        .then(() => {
            dispatch(delUserToken())
            dispatch(userLoaded(''))
        })
        .catch((err) => {
            dispatch(userError(err))
        })
}

export {
    userLogout,
    userEdit,
    userReg,
    userLogin,
    closeModal,
    showModal,
    setCity
}