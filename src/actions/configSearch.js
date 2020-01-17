const setTypeSearch = (type) => {
    return {
        type: 'SET_TYPE_SEARCH',
        payload: type
    }
}

const setSortingSearch = (e) => {
    const sorting = e.target.value
    return {
        type: 'SET_SORTING_SEARCH',
        payload: sorting
    }
}

const setMinPriceSearch = (e) => {
    const min = e.target.value
    return {
        type: 'SET_MIN_PRICE_SEARCH',
        payload: min
    }
}

const setMaxPriceSearch = (e) => {
    const max = e.target.value
    return {
        type: 'SET_MAX_PRICE_SEARCH',
        payload: max
    }
}

const setLimit = (total) => (dispatch) => (e) => {
    dispatch({
        type: 'SET_LIMIT',
        payload: e,
        total: total
    })
}

export {
    setLimit,
    setTypeSearch,
    setSortingSearch,
    setMinPriceSearch,
    setMaxPriceSearch
}