import * as api from '../services/Api'
import {setModal} from '../actions'


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


const setNumber = (number) => {
    return {
        type: 'SET_PHONE_NUMBER',
        payload: number
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

const getPhoneNumber = (id) => {
    return (dispatch) => {
        api.getPhoneNumber(id)
            .then((data) => {
                dispatch(setNumber(data.phoneNumber))
                dispatch(setModal('phone'))
            })
            .catch((err) => {
            })
    }
}

export {
    fetchOneRoom,
    getPhoneNumber
}