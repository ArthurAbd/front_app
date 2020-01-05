import axios from 'axios'

export default class Api {

    // url = 'http://185.5.251.215:3001'
    url = 'http://127.0.0.1:3001'


    login(data) {

        const clientId = 'desktop'
        const clientSecret = '12345'

        return new Promise((resolve, reject) => {
            axios.post('http://localhost:3001/oauth/token', {
                grant_type: 'password',
                client_id: clientId,
                client_secret: clientSecret,
                username: data.email,
                password: data.password
            })
            .then(function (res) {
                resolve(res.data)
            })
            .catch(function (error) {
                console.log(error)
                reject(error)
            })
        })
    }

    getNewToken(data) {
        return new Promise((resolve, reject) => {
            axios.post('http://localhost:3001/oauth/token', {
                grant_type: 'refresh_token',
                refresh_token: data.token,
                client_id: data.clientId,
                client_secret: data.clientSecret
            })
            .then(function (res) {
                resolve(res.body)
            })
            .catch(function (error) {
                console.log(error);
                reject(error)
            });
        })
    }

    logout() {
        return new Promise((resolve, reject) => {
            axios.post(this.url + '/logout')
                .then(function () {
                    resolve()
                })
                .catch(function (error) {
                    console.log(error)
                    reject(error)
                })
        })
    }

    addUser(data) {
        return new Promise((resolve, reject) => {
            axios.post(this.url + '/user/add', data)
                .then(function (res) {
                    resolve(res.data)
                })
                .catch(function (error) {
                    console.log(error)
                    reject(error)
                })
        })
    }

    editUser(data) {
        return new Promise((resolve, reject) => {
            axios.post(this.url + '/user/edit', data)
                .then(function (res) {
                    resolve(res.data)
                })
                .catch(function (error) {
                    console.log(error)
                    reject(error)
                })
        })
    }

    getSearchRooms(configSearch = null) {
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
            axios.get(this.url + '/find', {params: params})
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
                    console.log(error)
                    reject(error)
                })
        })
    }

    getOneRoom(id) {
        return new Promise((resolve, reject) => {
            axios.get(this.url + '/room', {params: {id: id}})
                .then(function (res) {
                    resolve(res.data)
                })
                .catch(function (error) {
                    console.log(error)
                    reject(error)
                })
        })
    }

    getMapItem(id) {
        return new Promise((resolve, reject) => {
            axios.get(this.url + '/map', {params: {id: id}})
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
                    console.log(error)
                    reject(error)
                })
        })
    }
}