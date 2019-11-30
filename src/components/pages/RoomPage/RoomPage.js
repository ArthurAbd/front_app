import React from 'react'
import s from './RoomPage.module.sass'
import Title from './Title/Title'
import Slider from './Slider/Slider'
import Info from './Info/Info'
import Map from '../../roomPage/Map/Map'
import Similar from '../../roomPage/Similar/Similar'
import Container from '../../Container/Container'
import {withApiConsumer} from '../../HOC/withApiConsumer'
import {connect} from 'react-redux'

class RoomPage extends React.Component { 

    componentDidMount() {
        console.log(this.props)
    }

    render() {
        return (
            <Container>
                <div className={s.RoomPage}>
                    <Title />
                    <Slider />
                    <Info />
                    <Map />
                    <Similar />
                </div>
            </Container>
        )
    }
}

export default withApiConsumer(connect())(RoomPage)