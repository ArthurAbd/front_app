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

export {
    setTypeSearch,
    setSortingSearch,
    setMinPriceSearch,
    setMaxPriceSearch
}