const setTypeSearch = (type) => {
    return {
        type: 'SET_TYPE_SEARCH',
        payload: type
    }
}

const setSortingSearch = (sorting) => {
    return {
        type: 'SET_SORTING_SEARCH',
        payload: sorting
    }
}

const setMinPriceSearch = (min) => {
    return {
        type: 'SET_MIN_PRICE_SEARCH',
        payload: min
    }
}

const setMaxPriceSearch = (max) => {
    return {
        type: 'SET_MAX_PRICE_SEARCH',
        payload: max
    }
}

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

const fetchRooms = (api, dispatch) => (configSearch) => {
    // dispatch(roomsRequested())
    api.getSearchRooms(configSearch)
        .then((data) => dispatch(roomsLoaded(data)))
        // .catch((err) => dispatch(roomsError(err)))
}

export {
    fetchRooms,
    setTypeSearch,
    setSortingSearch,
    setMinPriceSearch,
    setMaxPriceSearch
}