import axios from 'axios'


// const url = 'http://127.0.0.1:3001'
const url = 'http://95.214.9.69:3001'
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

const sendOnePhoto = (file) => {
    return new Promise((resolve, reject) => {
        const token = localStorage.getItem('accessToken')
        const formData = new FormData()
        formData.append('img', file)

        axios.post(url + '/upload/single', formData, {
            headers: {'Content-Type': 'multipart/form-data',
                'authorization': `Bearer ${token}`}
        })
        .then((res) => resolve(res))
        .catch((err) => reject(err))
    })
}

const geocode = (coords) => {
    return new Promise((resolve, reject) => {
        axios.get('https://geocode-maps.yandex.ru/1.x/', {
        params: {
            apikey: 'd6a15e01-7431-4971-aa3e-c04c1ed41014',
            format: 'json',
            geocode: coords.map(item => item.toFixed(6)).join(',')
          }})
        .then((res) => {
            resolve(res.data)
        })
        .catch((err) => reject(err))
    })
}

const addUser = (data) => {
    return post('/user/addUser', data)
}

const editUser = (data) => {
    const {repeatPassword, ...newData} = data
    return post('/user/editUser', newData)
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

const getMyData = () => {
    return post('/user/getMyData')
}

const getNewToken = () => {
    return post('/user/getNewToken', {
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

const getPhoneNumber = (idAd) => {
    return post('/call/getPhoneNumber', {idAd: idAd})
}

const updateInCallRating = (data) => {
    return post('/call/updateInCallRating', data)
}

const updateOutCallRating = (data) => {
    return post('/call/updateOutCallRating', data)
}

export {
    geocode,
    sendOnePhoto,
    login,
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