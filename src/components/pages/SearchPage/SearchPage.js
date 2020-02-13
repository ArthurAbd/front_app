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
import Select from '../../common/inputs/Select/Select'
import { compose } from 'redux'
import iconFilter from '../../../assets/icon/iconFilter.svg'
import iconLike from '../../../assets/icon/iconLike.svg'
import cardImg from '../../../assets/img/cardImg.jpg'
import TextInput from '../../common/inputs/TextInput/TextInput'




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
                selectValue,
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
                
                {/* <div onScroll={loadingResult ? null : setLimit(total)}
                    className={s.AdsSide} >
                {loading} */}
                <Filter {...configSearch}
                    setMinPriceSearch={setMinPriceSearch}
                    setMaxPriceSearch={setMaxPriceSearch}
                    setTypeSearch={setTypeSearch}
                    setSortingSearch={setSortingSearch} />


                <div className={s.Content}>
                    <div className={s.ContentFilter}>
                        <div className={s.AddressInput}>
                            <TextInput placeholder='Введите адрес' />
                        </div>
                        <div className={s.Sorting}>
                            <Select
                                value={selectValue}
                                className={`${s.Select} Input`}
                                name='select'
                                onChange={setSortingSearch}>
                                    
                                <option value='dateDesc'>По дате</option>
                                <option value='priceAsc'>Дешевле</option>
                                <option value='priceDesc'>Дороже</option>
                            </Select>
                        </div>
                    </div>

                    

                    <div className={s.CardsBlock}>
                        <div className={s.Card}>
                            <div className={s.CardImg}>
                                <img src={cardImg} />
                            </div>
                            <div className={s.CardContent}>
                                <div className={s.CardTitle}>Однокомнатная квартира 24 м2</div>
                                <div className={s.CardAddress}>Республика Татарстан, Казань, Ленинградская ул., 22</div>
                                <div className={s.CardType}>1-комнатная</div>
                                <div className={s.CardPrice}>
                                    <div>40 000 Р <span> / мес.</span></div>
                                    <div><img src={iconLike} /></div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className={s.Map}>
                        {map}
                    </div>
                </div>

                {/* <div className={s.Total}>{`${total} объектов`}</div> */}
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
            selectTypeValue: configSearch.type,
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