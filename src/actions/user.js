const setCity = (city) => {
    return {
        type: 'SET_CITY',
        payload: city
    }
}

const showModal = () => {
    return {
        type: 'SHOW_MODAL'
    }
}

const closeModal = () => {
    return {
        type: 'CLOSE_MODAL'
    }
}


export {
    closeModal,
    showModal,
    setCity
}