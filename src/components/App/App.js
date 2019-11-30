import React from 'react'
import s from './App.module.sass'
import Layout from '../Layout/Layout'
import RoomPage from '../../pages/RoomPage/RoomPage'
import SearchPage from '../../pages/SearchPage/SearchPage'

const App = () => {
    return (
        <div className={s.App}>
            <SearchPage />
            <Layout>
                
                <RoomPage />
            </Layout>
        </div>
    )
}

export default App