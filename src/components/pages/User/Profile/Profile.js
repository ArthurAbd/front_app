import React from 'react'
import s from './Profile.module.sass'
import {withRouter} from "react-router-dom";
import { Route, Switch } from 'react-router-dom';
import ProfileEdit from './ProfileEdit/ProfileEdit';
import { Link } from 'react-router-dom'
import Container from '../../../common/Container/Container';
import NewAd from '../NewAd/NewAd';
import MyAds from '../MyAds/MyAds';
import Inbox from '../Inbox/Inbox';



const Profile = (props) => {
    
    const {
        isAuth,
    } = props

    if (!isAuth) props.history.push('/login')

    return (
        <Container>
            <div className={s.Profile}>
                <div className={s.BtnGroup}>
                    <Link to='/profile/ads'>
                        <button className={s.Btn}>Мои объявления</button>
                    </Link>
                    <Link to='/profile/calls'>
                        <button className={s.Btn}>Входящие звонки</button>
                    </Link>
                    <Link to='/profile/edit'>
                        <button className={s.Btn}>Настройки</button>
                    </Link>
                </div>
                <div className={s.Content}>
                    <Switch>
                        <Route path='/profile/new' render={() => <NewAd />} />
                        <Route path='/profile/ads' render={() => <MyAds />} />
                        <Route path='/profile/calls' render={() => <Inbox />} />
                        <Route render={() => <ProfileEdit/>} />
                    </Switch>
                </div>
            </div>
        </Container>
    )
}


export default withRouter(Profile)