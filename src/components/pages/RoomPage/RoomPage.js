import React from 'react'
import s from './RoomPage.module.sass'
import PhotosBlock from './PhotosBlock/PhotosBlock'
import Info from './Info/Info'
import Map from '../RoomPage/Map/Map'
import Similar from '../RoomPage/Similar/Similar'
import Spinner from '../../common/Spinner/Spinner'
import {fetchOneRoom, getPhoneNumber, setModal} from '../../../actions'
import {connect} from 'react-redux'
import { compose } from 'redux'

class RoomPage extends React.Component {

    componentDidMount() {
        const id = this.props.match.params.id
        this.props.fetchOneRoom(id)
    }

    componentDidUpdate(prevProps) {
        const prevId = prevProps.match.params.id
        const id = this.props.match.params.id
        if (prevId !== id) {
            this.props.fetchOneRoom(id)
            window.scrollTo(0, 0)
        }
    }

    state = {
        showSlider: false
    }

    toggleSlider = () => {
        this.setState((state) => ({
            showSlider: !state.showSlider
        }))
    }

    render() {

        if (!this.props.oneRoom) return null
        
        const sliderSettings = {
            infinite: true,
            className: s.Slider,
            centerMode: true,
            speed: 500,
            slidesToShow: 1,
            slidesToScroll: 1
        }


        const { oneRoom: {
                    idAd,
                    address,
                    area,
                    coordX,
                    coordY,
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
                searchResult,
                getPhoneNumber,
                isAuth,
                setModal
        } = this.props

        const typeMap = {
            'r': 'Комната',
            'st': 'Студия',
            '1k': '1-комнатная',
            '2k': '2-комнатная',
            '3k': '3-комнатная',
            '4k+': '4-х и более'
        }

        const normalizeType = typeMap[type]

        const photosArr = photos.split(',')

        if (loadingResult) {
            return <Spinner />
        }

        const myRef = React.createRef()

        const scrollToMyRef = () => window.scrollTo(0, myRef.current.offsetTop)

        return (
            <div className={s.RoomPage}>
                <PhotosBlock toggleSlider={this.toggleSlider} photos={photosArr} />
                <div className={s.Container}>
                    <Info 
                        scrollToMyRef={scrollToMyRef}
                        idAd={idAd}
                        getPhoneNumber={getPhoneNumber}
                        type={normalizeType}
                        area={area}
                        floor={floor}
                        floors={floors}
                        description={description}
                        name={name}
                        phone_number={phone_number}
                        isAuth={isAuth}
                        setModal={setModal}
                    />
                    <div ref={myRef} >
                        <Map coordX={coordX} coordY={coordY} />
                    </div>
                    <Similar searchResult={searchResult} />
                </div>
            </div>
        )
    }
}

const mapStateToProps = ({oneRoom, searchResult, user}) => {
    return {
        isAuth: user.isAuth,
        oneRoom: oneRoom.oneRoom,
        loadingResult: oneRoom.loadingResult,
        searchResult: searchResult.searchResult
    }
}

export default compose(
    connect(mapStateToProps, 
        {fetchOneRoom, getPhoneNumber, setModal})
)(RoomPage)