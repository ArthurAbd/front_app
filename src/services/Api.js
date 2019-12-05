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
                    const data = res.data.map((room) => {
                        return {
                            id: room.id,
                            url: room.photos.split(',')[0],
                            price: room.price,
                            address: room.address 
                        }
                    })
                    resolve(data)
                })
                .catch(function (error) {
                    console.log(error)
                    reject(error)
                })
        })
    }
}