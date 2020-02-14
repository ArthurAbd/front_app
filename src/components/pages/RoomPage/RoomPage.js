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

    render() {
        const { oneRoom,
            loadingResult,
            searchResult,
            getPhoneNumber,
            isAuth,
            setModal
        } = this.props
        
        if (!this.props.oneRoom || loadingResult) return <Spinner />
        
        const {photos, coordX, coordY} = oneRoom
        const photosArr = photos.split(',')
        
        const myRef = React.createRef()
        
        const scrollToMyRef = () => window.scrollTo(0, myRef.current.offsetTop)
        
        return (
            <div className={s.RoomPage}>
                <PhotosBlock photos={photosArr} setModal={setModal} />
                <div className={s.Container}>
                    <Info 
                        {...oneRoom}
                        scrollToMyRef={scrollToMyRef}
                        getPhoneNumber={getPhoneNumber}
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