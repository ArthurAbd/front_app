import axios from 'axios'

export default class Api {

    get() {
        return 'sssfds'
    }

    getSearchRooms(configSearch = null) {
        let params = null
        
        if (configSearch !== null) {
            const {maxValue, minValue, offset, order, orderBy, selectTypeValue} = configSearch
            params = {
                offset,
                order,
                orderBy
            }
            if (selectTypeValue !== null) {
                params['type'] = [selectTypeValue]
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
            axios.get('http://185.5.251.215:3000/find', {params: params})
                .then(function (res) {
                    const data = res.data.map((room) => {
                        return {
                            id: room.id,
                            url: room.photos.split(',')[0],
                            price: room.price,
                            address: room.address 
                        }
                    })
                    // console.log('fdsfds',data)
                    resolve(data)
                })
                .catch(function (error) {
                    console.log(error)
                    reject(error)
                })
        })
    }
}