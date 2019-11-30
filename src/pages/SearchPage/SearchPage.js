import React from 'react'
import s from './SearchPage.module.sass'
import Filter from '../../components/searchPage/Filter/Filter'
import Map from '../../components/searchPage/Map/Map'

const SearchPage = () => {
    return (
        <div className={s.SearchPage}>
            <div className={s.AdsSide}>
                <Filter />
            </div>
            <div className={s.MapSide}>
                <Map />
            </div>
        </div>
    )
}

export default SearchPage