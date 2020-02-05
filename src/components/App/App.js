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
<<<<<<< HEAD
import A from '../../a'

=======
import ErrorBoundary from '../common/ErrorBoundary/ErrorBoundary'
import UI from '../UI/UI'
>>>>>>> b044a8256131c98cd77fbb5a9316e697eef27bbc

const App = () => {
    return (
        <Provider store={store}>
            <BrowserRouter>
<<<<<<< HEAD
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
=======
                <div className={s.App}>
                    <Layout>
                        <ErrorBoundary>
                            <Switch>
                                <Route path='/test' component={UI} />
                                <Route path='/room/:id' component={RoomPage} />
                                <Route path='/search' component={SearchPage} />
                                <Route path='/profile' component={Profile} />
                                <Route component={MainPage} />
                            </Switch>
                        </ErrorBoundary>
                    </Layout>
                </div>
>>>>>>> b044a8256131c98cd77fbb5a9316e697eef27bbc
            </BrowserRouter>
        </Provider>
    )
}

export default App