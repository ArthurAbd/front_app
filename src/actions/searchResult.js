import store from '../store'
import {setCoords} from '../actions/searchMap'

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

const fetchRooms = (api, dispatch) => () => {
    const {configSearch: {configSearch}} = store.getState()
    dispatch(roomsRequested())
    api.getSearchRooms(configSearch)
        .then((data) => {
            const {coords, ...rooms} = data
            dispatch(roomsLoaded(rooms))
            dispatch(setCoords(coords))
        })
        .catch((err) => dispatch(roomsError(err)))
}

export {
    fetchRooms
}