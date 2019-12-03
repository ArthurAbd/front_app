import React from 'react'
import s from './SearchPage.module.sass'
import Filter from './Filter/Filter'
import Map from './Map/Map'
import Card from '../../common/Card/Card'
import {connect} from 'react-redux'
import {
    setTypeSearch,
    setSortingSearch,
    setMinPriceSearch,
    setMaxPriceSearch
} from '../../../actions/index'


const SearchPage = (props) => {

    const {searchResult, configSearch,
            setMinPriceSearch, setMaxPriceSearch,
            setTypeSearch, setSortingSearch} = props
    const cards = searchResult.map((item) => {
        return (
            <Card key={item.id} cardData={item} />
        )
    })

    return (
        <div className={s.SearchPage}>
            <div className={s.AdsSide} >

                <Filter {...configSearch}
                    setMinPriceSearch={setMinPriceSearch}
                    setMaxPriceSearch={setMaxPriceSearch}
                    setTypeSearch={setTypeSearch}
                    setSortingSearch={setSortingSearch} />

                <div className={s.CardGroup}>
                    {cards}
                </div>
            </div>
            <div className={s.MapSide}>
                <Map />
            </div>
        </div>
    )
}

const mapStateToProps = ({searchResult, configSearch}) => {
    return {
        searchResult: searchResult,
        configSearch: {minValue: configSearch.min,
            maxValue: configSearch.max,
            selectValue:configSearch.selectSort,
            selectTypeValue:configSearch.selectType}
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        setSortingSearch: (sorting) => dispatch(setSortingSearch(sorting)),
        setTypeSearch: (type) => dispatch(setTypeSearch(type)),
        setMinPriceSearch: (min) => dispatch(setMinPriceSearch(min)),
        setMaxPriceSearch: (max) => dispatch(setMaxPriceSearch(max))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(SearchPage)