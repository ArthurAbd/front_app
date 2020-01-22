import axios from 'axios'


const url = 'http://127.0.0.1:3001'
const clientId = 'desktop'
const clientSecret = '12345'

const login = (data) => {
    return new Promise((resolve, reject) => {
        axios.post(url + '/user/login', {
            grant_type: 'password',
            client_id: clientId,
            client_secret: clientSecret,
            username: data.number,
            password: data.password
        })
        .then(function (res) {
            console.log('res',res)
            resolve(res.data)
        })
        .catch(function (error) {
            if (error.response && error.response.data) {return reject(error.response.data)}
            console.log('error',error);
            reject(error)
        })
    })
}

const getMe = () => {
    return new Promise((resolve, reject) => {
        const authToken = {
            headers: {'authorization': `Bearer ${localStorage.getItem('accessToken')}`}
        }

        axios.post(url + '/user/me', null, authToken)
        .then(function (res) {
            resolve(res)
        })
        .catch(function (error) {
            if (error.response && error.response.data) {return reject(error.response.data)}
            console.log('error',error);
            reject(error)
        })
    })
}

const getNewToken = () => {
    return new Promise((resolve, reject) => {
        axios.post(url + '/oauth/token', {
            grant_type: 'refresh_token',
            refresh_token: localStorage.getItem('refreshToken'),
            client_id: clientId,
            client_secret: clientSecret
        })
        .then(function (res) {
            resolve(res.data)
        })
        .catch(function (error) {
            if (error.response && error.response.data) {return reject(error.response.data)}
            console.log('error',error);
            reject(error)
        });
    })
}

const logout = () => {
    return new Promise((resolve, reject) => {
        const authToken = {
            headers: {'authorization': `Bearer ${localStorage.getItem('accessToken')}`}
        }

        axios.post(url + '/user/logout', {
            clientId: clientId
        }, authToken)
            .then(function () {
                resolve()
            })
            .catch(function (error) {
                if (error.response && error.response.data) {return reject(error.response.data)}
                console.log('error',error);
                reject(error)
            })
    })
}

const addUser = (data) => {
    return new Promise((resolve, reject) => {
        const authToken = {
            headers: {'authorization': `Bearer ${localStorage.getItem('accessToken')}`}
        }

        axios.post(url + '/user/add', data, authToken)
            .then(function (res) {
                resolve(res.data)
            })
            .catch(function (error) {
                if (error.response && error.response.data) {return reject(error.response.data)}
                console.log('error',error);
                reject(error)
            })
    })
}

const editUser = (data) => {
    return new Promise((resolve, reject) => {
        const authToken = {
            headers: {'authorization': `Bearer ${localStorage.getItem('accessToken')}`}
        }

        axios.post(url + '/user/edit', data, authToken)
            .then(function (res) {
                resolve(res.data)
            })
            .catch(function (error) {
                if (error.response && error.response.data) {return reject(error.response.data)}
                console.log('error',error);
                reject(error)
            })
    })
}

const getPhoneNumber = (id) => {
    return new Promise((resolve, reject) => {
        const authToken = {
            headers: {'authorization': `Bearer ${localStorage.getItem('accessToken')}`}
        }

        axios.post(url + '/room/number', {id}, authToken)
            .then(function (res) {
                resolve(res.data)
            })
            .catch(function (error) {
                if (error.response && error.response.data) {return reject(error.response.data)}
                console.log('error',error);
                reject(error)
            })
    })
}

const getSearchRooms = (configSearch = null) => {
    let params = null
    if (configSearch !== null) {
        const {max, min, offset, limit, order, orderBy, selectType, city} = configSearch
        params = {
            offset,
            limit,
            order,
            orderBy,
            city
        }
        if (selectType !== null) {
            params['type'] = [selectType]
        }
        if (min !== '') {
            params['min'] = min
        }
        if (max !== '') {
            params['max'] = max
        }
    }

    
    return new Promise((resolve, reject) => {
        axios.get(url + '/find', {params: params})
            .then(function (res) {
                console.log(res)
                const result = res.data.result.map((room) => {
                    return {
                        id: room.id,
                        img: room.photos.split(',')[0],
                        price: room.price,
                        address: room.address 
                    }
                })
                const total = res.data.coords.length
                const coords = res.data.coords
                
                if (total === 0) resolve(null)

                resolve({result, total, coords})
            })
            .catch(function (error) {
                if (error.response && error.response.data) {return reject(error.response.data)}
                console.log('error',error);
                reject(error)
            })
    })
}

const getOneRoom = (id) => {
    return new Promise((resolve, reject) => {
        axios.get(url + '/room', {params: {id: id}})
            .then(function (res) {
                resolve(res.data)
            })
            .catch(function (error) {
                if (error.response && error.response.data) {return reject(error.response.data)}
                console.log('error',error);
                reject(error)
            })
    })
}

const getMapItem = (id) => {
    return new Promise((resolve, reject) => {
        axios.get(url + '/map', {params: {id: id}})
            .then(function (res) {
                const {id, photos, price, coord_map_x, coord_map_y} = res.data
                const result =  {
                                id,
                                img: photos.split(',')[0],
                                price,
                                coord_map_x,
                                coord_map_y
                            }
                
                resolve(result)
            })
            .catch(function (error) {
                if (error.response && error.response.data) {return reject(error.response.data)}
                console.log('error',error);
                reject(error)
            })
    })
}

export {
    getPhoneNumber,
    login,
    getMe,
    getNewToken,
    logout,
    addUser,
    editUser,
    getSearchRooms,
    getOneRoom,
    getMapItem
}