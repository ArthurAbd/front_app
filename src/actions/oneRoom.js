import * as api from '../services/Api'
import {setModal} from '../actions'

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


const setNumberData = (data) => {
    return {
        type: 'SET_PHONE_NUMBER_DATA',
        payload: data
    }
}

const oneRoomLoading = (bool) => {
    return {
        type: 'ONE_ROOM_LOADING',
        payload: bool
    }
}


const fetchOneRoom = (id) => {
    return (dispatch) => {
        dispatch(oneRoomLoading(true))
        api.getOneRoom(id)
            .then((data) => {
                dispatch(oneRoomLoading(false))
                dispatch(roomOneLoaded(data))
            })
            .catch((err) => {
                dispatch(oneRoomLoading(false))
                dispatch(roomOneError(err))
            })
    }
}

const updateOutCallRating = (data) => {
    return (dispatch) => {
        dispatch(oneRoomLoading(true))
        api.updateOutCallRating(data)
            .then((data) => {
                dispatch(oneRoomLoading(false))
                dispatch(setModal(false))
            })
            .catch((err) => {
                dispatch(oneRoomLoading(false))
                dispatch(roomOneError(err))
            })
    }
}

const getPhoneNumber = (id) => {
    return (dispatch) => {
        dispatch(oneRoomLoading(true))
        api.getPhoneNumber(id)
            .then((data) => {
                dispatch(oneRoomLoading(false))
                dispatch(setNumberData(data))
                dispatch(setModal('phone'))
            })
            .catch((err) => {
                dispatch(oneRoomLoading(false))
                dispatch(roomOneError(err))
            })
    }
}

export {
    updateOutCallRating,
    fetchOneRoom,
    getPhoneNumber
}