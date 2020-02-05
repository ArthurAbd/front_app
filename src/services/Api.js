import axios from 'axios'


// const url = 'http://185.5.251.215:3001'
const url = 'http://127.0.0.1:3001'
const clientId = 'desktop'
const clientSecret = '12345'
const post = (path, data) => {
    return new Promise((resolve, reject) => {
        const token = localStorage.getItem('accessToken')
        let authToken = undefined
        if (token) {
            authToken = {
                headers: {'authorization': `Bearer ${token}`}
            }
        }
        
        axios.post(url + path, data, authToken)
        .then(function (res) {
            console.log(res.data)
            resolve(res.data)
        })
        .catch(function (error) {
            if (error.response && error.response.data)
                {return reject(error.response.data)}
            console.log('error',error)
            reject(error)
        });
    })
}


const addUser = (data) => {
    return post('/user/addUser', data)
}

const editUser = (data) => {
    return post('/user/editUser', data)
}

const login = (data) => {
    return post('/user/login', {
        grant_type: 'password',
        client_id: clientId,
        client_secret: clientSecret,
        username: data.number,
        password: data.password
    })
}

const logout = () => {
    return post('/user/logout', {
        clientId: clientId
    })
}

const getMe = () => {
    return post('/user/getMe')
}

const getMyData = () => {
    return post('/user/getMyData')
}

const getNewToken = () => {
    return post('/user/getMyData', {
        grant_type: 'refresh_token',
        refresh_token: localStorage.getItem('refreshToken'),
        client_id: clientId,
        client_secret: clientSecret
    })
}

const newAd = (data) => {
    return post('/ad/newAd', data)
}

const editAd = (data) => {
    return post('/ad/editAd', data)
}

const removeAd = (id) => {
    return post('/ad/removeAd', {idAd: id})
}

const getMyAds = () => {
    return post('/ad/getMyAds')
}

const getOneRoom = (id) => {
    return post('/room/getOneRoom', {idAd: id})
}

const getListRooms = (data) => {
    return post('/room/getListRooms', data)
}

const getMapItem = (id) => {
    return post('/room/getMapItem', {idAd: id})
}

const getInCalls = () => {
    return post('/call/getInCalls')
}

const getPhoneNumber = (id) => {
    return post('/room/getMapItem', {idAd: id})
}

const updateInCallRating = (data) => {
    return post('/call/updateInCallRating', data)
}

const updateOutCallRating = (data) => {
    return post('/call/updateOutCallRating', data)
}

export {
    login,
    getMe,
    getNewToken,
    logout,
    addUser,
    editUser,
    getListRooms,
    getOneRoom,
    getMapItem,
    getMyData,
    newAd,
    editAd,
    removeAd,
    getMyAds,
    getInCalls,
    getPhoneNumber,
    updateInCallRating,
    updateOutCallRating
}