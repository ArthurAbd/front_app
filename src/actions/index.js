import {setLimit,
    setTypeSearch,
    setSortingSearch,
    setMinPriceSearch,
    setMaxPriceSearch} from './configSearch'
import {fetchRooms} from './searchResult'
import {fetchOneRoom, getPhoneNumber} from './oneRoom'
import {setCoords,
    fetchSelectItem,
    delSelectItem,
    setMapCenter} from './searchMap'
import {
    setModal,
    getMe,
    setCity,
    userLogout,
    userEdit,
    userReg,
    userLogin} from './user'
import {sendOnePhoto} from './fileInput'

export {
    sendOnePhoto,
    getPhoneNumber,
    setModal,
    getMe,
    userLogout,
    userEdit,
    userReg,
    userLogin,
    setCity,
    setMapCenter,
    fetchSelectItem,
    delSelectItem,
    setCoords,
    setLimit,
    fetchRooms,
    setTypeSearch,
    setSortingSearch,
    setMinPriceSearch,
    setMaxPriceSearch,
    fetchOneRoom,
}