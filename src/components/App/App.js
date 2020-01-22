import React from 'react'
import s from './App.module.sass'
import Layout from '../Layout/Layout'
import RoomPage from '../pages/RoomPage/RoomPage'
import SearchPage from '../pages/SearchPage/SearchPage'
import MainPage from '../pages/MainPage/MainPage'
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import {Provider} from 'react-redux'
import store from '../../store'
import Profile from '../pages/User/Profile/Profile'


const App = () => {
    return (
        <Provider store={store}>
            <BrowserRouter>
                <div className={s.App}>
                    <Layout>
                        <Switch>
                            <Route path='/room/:id' component={RoomPage} />
                            <Route path='/search' component={SearchPage} />
                            <Route path='/profile' component={Profile} />
                            <Route component={MainPage} />
                        </Switch>
                    </Layout>
                </div>
            </BrowserRouter>
        </Provider>
    )
}

export default App