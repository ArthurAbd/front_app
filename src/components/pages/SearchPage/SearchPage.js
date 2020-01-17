import React from 'react'
import s from './SearchPage.module.sass'
import Filter from './Filter/Filter'
import Map from './Map/Map'
import Card from '../../common/Card/Card'
import {connect} from 'react-redux'
import {
    setMapCenter,
    fetchSelectItem,
    delSelectItem,
    setLimit,
    fetchRooms,
    setTypeSearch,
    setSortingSearch,
    setMinPriceSearch,
    setMaxPriceSearch
} from '../../../actions/index'
import Spinner from '../../common/Spinner/Spinner'
import { compose } from 'redux'


class SearchPage extends React.Component {

    componentDidMount() {
        this.props.fetchRooms()
    }

    componentDidUpdate(prevProps) {
        const isUpdate = Object.keys(prevProps.configSearch)
            .every((key) => { 
                return prevProps.configSearch[key] === this.props.configSearch[key]
            })
        if (!isUpdate || prevProps.city !== this.props.city) {
            this.props.fetchRooms()
        }
        
    }

    render() {
        const { 
                setMapCenter,
                mapCenter,
                fetchSelectItem,
                delSelectItem,
                selectItem,
                searchMapCoords,
                loadingResult,
                total,
                searchResult,
                configSearch,
                setLimit,
                setMinPriceSearch,
                setMaxPriceSearch,
                setTypeSearch,
                setSortingSearch} = this.props


        const cards = searchResult ? searchResult.map((item) => {
            return (
                <Card key={item.id} cardData={item} setMapCenter={setMapCenter} />
            )
        }) : null


        let loading = null
        if (loadingResult) {
            loading = <Spinner />
        }

        const map = searchMapCoords ? <Map
            setMapCenter={setMapCenter}
            mapCenter={mapCenter}
            searchMapCoords={searchMapCoords}
            selectItem={selectItem}
            fetchSelectItem={fetchSelectItem}
            delSelectItem={delSelectItem} 
            /> : null

        return (
            <div className={s.SearchPage}>
                
                <div onScroll={loadingResult ? null : setLimit(total)}
                    className={s.AdsSide} >
                {loading}
                    <Filter {...configSearch}
                        setMinPriceSearch={setMinPriceSearch}
                        setMaxPriceSearch={setMaxPriceSearch}
                        setTypeSearch={setTypeSearch}
                        setSortingSearch={setSortingSearch} />
                    
                    <div className={s.Total}>{`${total} объектов`}</div>

                    <div className={s.CardGroup}>
                        {cards}
                    </div>
                </div>
                <div className={s.MapSide}>
                    {map}
                </div>
            </div>
        )
    }
}

const mapStateToProps = ({searchResult, configSearch: {configSearch}, searchMap, user}) => {
    return {
        city: user.city,
        mapCenter: searchMap.mapCenter,
        selectItem: searchMap.selectItem,
        searchMapCoords: searchMap.searchMapCoords,
        searchResult: searchResult.searchResult,
        total: searchResult.total,
        loadingResult: searchResult.loadingResult,
        configSearch: {minValue: configSearch.min,
            maxValue: configSearch.max,
            selectValue: configSearch.selectSort,
            selectTypeValue: configSearch.selectType,
            limit: configSearch.limit
            }
    }
}

export default compose(
    connect(mapStateToProps, 
        {   setMapCenter, fetchSelectItem, delSelectItem,
            setLimit,
            fetchRooms, setSortingSearch, setTypeSearch, setMinPriceSearch,
            setMaxPriceSearch})
)(SearchPage)