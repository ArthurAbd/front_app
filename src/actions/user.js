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

const userLoaded = () => {
    return {
        type: 'FETCH_USER_SECCESS',
    }
}

const userError = (error) => {
    return {
        type: 'FETCH_USER_FAILURE',
        payload: error
    }
}

const setUserToken = (token) => {
    return {
        type: 'SET_USER_TOKEN',
        payload: token
    }
}

const userLogin = (api, dispatch) => (e) => {
    e.preventDefault()
    const data = {  email: e.target.email.value,
                    password: e.target.password.value}
    dispatch(userRequested())
    api.login(data)
        .then((res) =>  {
            dispatch(userLoaded())
            dispatch(setUserToken(res))
        })
        .catch((err) => {
            dispatch(userError(err))
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
        })
        .catch((err) => {
            dispatch(userError(err))
        })
}

const userEdit = (api, dispatch) => (data) => {
    dispatch(userRequested())
    api.editUser(data)
        .then((res) =>  dispatch(userLoaded(res)))
        .catch((err) => dispatch(userError(err)))
}

const userLogout = (api, dispatch) => () => {
    dispatch(userRequested())
    api.logout()
        .then((res) =>  dispatch(userLoaded(res)))
        .catch((err) => dispatch(userError(err)))
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