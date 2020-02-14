import store from '../store'
import {setCoords} from '../actions/index'
import * as api from '../services/Api'

const roomsRequested = () => {
    return {
        type: 'FETCH_ROOMS_REQUEST'
    }
}

const roomsLoaded = (rooms) => {
    return {
        type: 'FETCH_ROOMS_SECCESS',
        payload: rooms
    }
}

const roomsError = (error) => {
    return {
        type: 'FETCH_ROOMS_FAILURE',
        payload: error
    }
}

const fetchRooms = () => {
    return (dispatch) => {
        const {configSearch: {configSearch}, user: {city}} = store.getState()
        dispatch(roomsRequested())
        const {selectSort, ...rest} = configSearch
        api.getListRooms({city: city, ...rest})
            .then((data) => {
                const {coords, ...rooms} = data
                dispatch(roomsLoaded({...rooms, total: coords.length}))
                dispatch(setCoords(coords))
            })
            .catch((err) => dispatch(roomsError(err)))
    }
}

export {
    fetchRooms
}