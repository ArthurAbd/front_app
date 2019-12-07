import axios from 'axios'

export default class Api {

    getSearchRooms(configSearch = null) {
        let params = null
        
        if (configSearch !== null) {
            const {maxValue, minValue, offset, limit, order, orderBy, selectType} = configSearch
            params = {
                offset,
                limit,
                order,
                orderBy
            }
            if (selectType !== null) {
                params['type'] = [selectType]
            }
            if (minValue !== '') {
                params['min'] = minValue
            }
            if (maxValue !== '') {
                params['max'] = maxValue
            }
        }

        console.log(params)
        return new Promise((resolve, reject) => {
            // axios.get('http://185.5.251.215:3000/find', {params: params})
            axios.get('http://127.0.0.1:3001/find', {params: params})
                .then(function (res) {
                    console.log(res)
                    const result = res.data.result.map((room) => {
                        return {
                            id: room.id,
                            url: room.photos.split(',')[0],
                            price: room.price,
                            address: room.address 
                        }
                    })
                    const total = res.data.total[0]['count(*)']
                    const data = {result, total}
                    resolve(data)
                })
                .catch(function (error) {
                    console.log(error)
                    reject(error)
                })
        })
    }

    getOneRoom(id) {

        return new Promise((resolve, reject) => {
            // axios.get('http://185.5.251.215:3000/room', {params: {id: id}})
            axios.get('http://127.0.0.1:3001/room', {params: {id: id}})
                .then(function (res) {
                    resolve(res.data)
                })
                .catch(function (error) {
                    console.log(error)
                    reject(error)
                })
        })
    }
}