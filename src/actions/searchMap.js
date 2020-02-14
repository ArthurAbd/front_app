import * as api from '../services/Api'

const setCoords = (coords) => {
    return {
        type: 'SET_COORDS',
        payload: coords
    }
}

const setSelectItem = (item) => {
    return {
        type: 'SET_SELECT_ITEM',
        payload: item
    }
}

const setMapCenter = (id) => {
    
    return {
        type: 'SET_MAP_CENTER',
        payload: id
    }
}

const fetchSelectItem = (id) => {
    return (dispatch) => {
        api.getMapItem(id)
            .then((data) => {
                dispatch(setSelectItem(data))
            })
    }
}

const delSelectItem = () => {
    return {
        type: 'DEL_SELECT_ITEM',
    }
}

export {
    fetchSelectItem,
    setMapCenter,
    delSelectItem,
    setCoords
}