import React from 'react'
import s from './SearchPage.module.sass'
import Filter from './Filter/Filter'
import Map from './Map/Map'
import Card from '../../common/Card/Card'
import {connect} from 'react-redux'
import {
    fetchRooms,
    setTypeSearch,
    setSortingSearch,
    setMinPriceSearch,
    setMaxPriceSearch
} from '../../../actions/index'
import {withApiConsumer} from '../../HOC/withApiConsumer'


class SearchPage extends React.Component {

    componentDidMount() {
        // console.log(this.props)
        this.props.fetchRooms()
    }

    componentDidUpdate(prevProps) {
        const isUpdate = Object.keys(prevProps.configSearch)
            .every((key) => { 
                return prevProps.configSearch[key] === this.props.configSearch[key]
            })
            // console.log(isUpdate)
        if (!isUpdate) {
            this.props.fetchRooms(this.props.configSearch)
        }
        
    }

    render() {
        const { searchResult,
                configSearch,
                setMinPriceSearch,
                setMaxPriceSearch,
                setTypeSearch,
                setSortingSearch} = this.props
                
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
}

const mapStateToProps = ({searchResult, configSearch}) => {
    return {
        searchResult: searchResult,
        configSearch: {minValue: configSearch.min,
            maxValue: configSearch.max,
            selectValue:configSearch.selectSort,
            selectTypeValue:configSearch.selectType,
            orderBy: configSearch.orderBy,
            order: configSearch.order,
            offset: configSearch.offset,
            limit: configSearch.limit}
    }
}

const mapDispatchToProps = (dispatch, ownProps) => {
    const {api} = ownProps
    return {
        fetchRooms: fetchRooms(api, dispatch),
        setSortingSearch: (e) => dispatch(setSortingSearch(e.target.value)),
        setTypeSearch: (type) => dispatch(setTypeSearch(type)),
        setMinPriceSearch: (e) => dispatch(setMinPriceSearch(e.target.value)),
        setMaxPriceSearch: (e) => dispatch(setMaxPriceSearch(e.target.value))
    }
}

export default withApiConsumer()(connect(mapStateToProps, mapDispatchToProps)(SearchPage))