import React from 'react'
import s from './RoomPage.module.sass'
import Title from '../../components/roomPage/Title/Title'
import Slider from '../../components/roomPage/Slider/Slider'
import Info from '../../components/roomPage/Info/Info'
import Map from '../../components/roomPage/Map/Map'
import Similar from '../../components/roomPage/Similar/Similar'

const RoomPage = () => {
    return (
        <div className={s.RoomPage}>
            <Title />
            <Slider />
            <Info />
            <Map />
            <Similar />
        </div>
    )
}

export default RoomPage