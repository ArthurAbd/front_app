import React from 'react'
import s from './SearchPage.module.sass'
import Filter from './Filter/Filter'
import Map from './Map/Map'
import Card from '../../common/Card/Card'
import {connect} from 'react-redux'
import {
    setLimit,
    fetchRooms,
    setTypeSearch,
    setSortingSearch,
    setMinPriceSearch,
    setMaxPriceSearch
} from '../../../actions/index'
import {withApiConsumer} from '../../HOC/withApiConsumer'
import Spinner from '../../common/Spinner/Spinner'


class SearchPage extends React.Component {

    componentDidMount() {
        this.props.fetchRooms()
    }

    componentDidUpdate(prevProps) {
        const isUpdate = Object.keys(prevProps.configSearch)
            .every((key) => { 
                return prevProps.configSearch[key] === this.props.configSearch[key]
            })
        if (!isUpdate) {
            this.props.fetchRooms()
        }
        
    }

    render() {
        const { loadingResult,
                searchResult,
                configSearch,
                setLimit,
                setMinPriceSearch,
                setMaxPriceSearch,
                setTypeSearch,
                setSortingSearch} = this.props


        let cards = null

        if (searchResult) {
            cards = searchResult.map((item) => {
                return (
                    <Card key={item.id} cardData={item} />
                )
            })
        }

        let loading = null
        if (loadingResult) {
            loading = <Spinner />
        }


        return (
            <div className={s.SearchPage}>
                
                <div onScroll={loadingResult ? null : setLimit}
                    className={s.AdsSide} >
                {loading}
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
}

const mapStateToProps = ({searchResult, configSearch: {configSearch}}) => {
    return {
        searchResult: searchResult.searchResult,
        loadingResult: searchResult.loadingResult,
        configSearch: {minValue: configSearch.min,
            maxValue: configSearch.max,
            selectValue: configSearch.selectSort,
            selectTypeValue: configSearch.selectType,
            limit: configSearch.limit
            }
    }
}

const mapDispatchToProps = (dispatch, ownProps) => {
    const {api} = ownProps
    return {
        setLimit: (e) => dispatch(setLimit(e)),
        fetchRooms: fetchRooms(api, dispatch),
        setSortingSearch: (e) => dispatch(setSortingSearch(e.target.value)),
        setTypeSearch: (type) => dispatch(setTypeSearch(type)),
        setMinPriceSearch: (e) => dispatch(setMinPriceSearch(e.target.value)),
        setMaxPriceSearch: (e) => dispatch(setMaxPriceSearch(e.target.value))
    }
}

export default withApiConsumer()(connect(mapStateToProps, mapDispatchToProps)(SearchPage))