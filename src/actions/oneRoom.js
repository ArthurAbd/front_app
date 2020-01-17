import api from '../services/Api'

const roomOneRequested = () => {
    return {
        type: 'FETCH_ONE_ROOM_REQUEST'
    }
}

const roomOneLoaded = (room) => {
    return {
        type: 'FETCH_ONE_ROOM_SECCESS',
        payload: room
    }
}

const roomOneError = (error) => {
    return {
        type: 'FETCH_ONE_ROOM_FAILURE',
        payload: error
    }
}


const fetchOneRoom = (id) => {
    return (dispatch) => {
        dispatch(roomOneRequested())
        api.getOneRoom(id)
            .then((data) =>  dispatch(roomOneLoaded(data)))
            .catch((err) => dispatch(roomOneError(err)))
    }
}

export {
    fetchOneRoom
}