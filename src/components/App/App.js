import React from 'react'
import s from './App.module.sass'
import Layout from '../Layout/Layout'
import RoomPage from '../pages/RoomPage/RoomPage'
import SearchPage from '../pages/SearchPage/SearchPage'
import MainPage from '../pages/MainPage/MainPage'
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import {Provider} from 'react-redux'
import store from '../../store'
import Login from '../pages/User/Login/Login'
import Reg from '../pages/User/Reg/Reg'
import Profile from '../pages/User/Profile/Profile'
import User from '../pages/User/User'


const App = () => {
    return (
        <Provider store={store}>
            <BrowserRouter>
                <div className={s.App}>
                    <Layout>
                        <Switch>
                            <Route path='/room/:id' component={RoomPage} />
                            <Route path='/search' component={SearchPage} />
                            <Route path='/login' render={() => (
                                <User>
                                    {Login}
                                </User>
                            )} />
                            <Route path='/reg' render={() => (
                                <User>
                                    {Reg}
                                </User>
                            )} />
                            <Route path='/profile' render={() => (
                                <User>
                                    {Profile}
                                </User>
                            )} />
                            <Route component={MainPage} />
                        </Switch>
                    </Layout>
                </div>
            </BrowserRouter>
        </Provider>
    )
}

export default App