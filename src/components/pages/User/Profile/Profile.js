import React from 'react'
import s from './Profile.module.sass'
import {withRouter} from "react-router-dom";
import { Route, Switch } from 'react-router-dom';
import ProfileEdit from './ProfileEdit/ProfileEdit';
import { Link } from 'react-router-dom'
import Container from '../../../Container/Container';



const Profile = (props) => {
    
    const {
        isAuth,
        userEdit,
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
                        <Route path='/profile/new' render={() => <div>новое</div>} />
                        <Route path='/profile/ads' render={() => <div>объявления</div>} />
                        <Route path='/profile/calls' render={() => <div>звонки</div>} />
                        <Route render={() => <ProfileEdit/>} />
                    </Switch>
                </div>
            </div>
        </Container>
    )
}


export default withRouter(Profile)