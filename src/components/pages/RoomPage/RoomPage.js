import React from 'react'
import s from './RoomPage.module.sass'
import Title from './Title/Title'
import Slider from './Slider/Slider'
import Info from './Info/Info'
import Map from '../RoomPage/Map/Map'
import Similar from '../RoomPage/Similar/Similar'
import Spinner from '../../common/Spinner/Spinner'
import Container from '../../Container/Container'
import {withApiConsumer} from '../../HOC/withApiConsumer'
import {fetchOneRoom} from '../../../actions/index'
import {connect} from 'react-redux'

class RoomPage extends React.Component { 

    componentDidMount() {
        const id = this.props.match.params.id
        this.props.fetchOneRoom(id)
    }

    componentDidUpdate(prevProps) {
        const prevId = prevProps.match.params.id
        const id = this.props.match.params.id
        if (prevId !== id)
        this.props.fetchOneRoom(id)
    }

    render(props) {

        const { oneRoom: {
                    address,
                    area,
                    coord_map_x,
                    coord_map_y,
                    description,
                    floor,
                    floors,
                    photos,
                    price,
                    type,
                    name,
                    phone_number
                },
                loadingResult,
                searchResult
        } = this.props
        
        let loading = null
        if (loadingResult) {
            loading = <Spinner />
        }

        return (
            <Container>
                <div className={s.RoomPage}>
                    {loading}
                    <Title type={type} price={price} address={address} area={area} />
                    <Slider photos={photos} />
                    <Info type={type}
                        area={area}
                        floor={floor}
                        floors={floors}
                        description={description}
                        name={name}
                        phone_number={phone_number}
                    />
                    <Map coord_map_x={coord_map_x} coord_map_y={coord_map_y} />
                    <Similar searchResult={searchResult} />
                </div>
            </Container>
        )
    }
}

const mapStateToProps = ({oneRoom, searchResult}) => {
    return {
        oneRoom: oneRoom.oneRoom,
        loadingResult: oneRoom.loadingResult,
        searchResult: searchResult.searchResult
    }
}

const mapDispatchToProps = (dispatch, ownProps) => {
    const {api} = ownProps
    return {
        fetchOneRoom: fetchOneRoom(api, dispatch)
    }
}

export default withApiConsumer()(connect(mapStateToProps, mapDispatchToProps)(RoomPage))