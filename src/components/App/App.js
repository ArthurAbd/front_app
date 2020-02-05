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
import A from '../../a'


const App = () => {
    return (
        <Provider store={store}>
            <BrowserRouter>
                <Switch>
                    
                <Route path='/a' exact component={A} />

                    <div className={s.App}>
                        <Layout>
                            <Route path='/room/:id' component={RoomPage} />
                            <Route path='/search' component={SearchPage} />
                            <Route path='/profile' component={Profile} />
                            <Route component={MainPage} />
                        </Layout>
                    </div>
                </Switch>
            </BrowserRouter>
        </Provider>
    )
}

export default App