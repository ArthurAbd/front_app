import React from 'react'
import s from './Profile.module.sass'
import {withRouter, NavLink} from "react-router-dom";
import { Route, Switch } from 'react-router-dom';
import ProfileEdit from './ProfileEdit/ProfileEdit';
import Container from '../../common/Container/Container';
import NewAd from './NewAd/NewAd';
import MyAds from './MyAds/MyAds';
import Inbox from './Inbox/Inbox';
import { compose } from 'redux';
import { connect } from 'react-redux';
import Spinner from './../../common/Spinner/Spinner';
import {setModal, userEdit, userLogout} from './../../../actions'
import Button from '../../common/Button/Button';


const Profile = (props) => {

    const {
        userLogout,
        userEdit,
        user,
        setModal,
        isLoading,
        isAuth,
        history
    } = props

    const logOut = () => {
        history.push('/')
        userLogout()
    }

    if (isLoading) return <Spinner />
    
    if (!isAuth) {
        setModal('login')
        props.history.push('/')
        return null
    }

    return (
        <Container>
            <div className={s.Profile}>
                <div className={s.NavMenu}>
                    <NavLink to='/profile/new' activeClassName={s.Active} >
                        <Button size='m' variant='transparent'>Новое объявление</Button>
                    </NavLink>
                    <NavLink to='/profile/ads' activeClassName={s.Active} >
                        <Button size='m' variant='transparent'>Мои объявления</Button>
                    </NavLink>
                    <NavLink to='/profile/calls' activeClassName={s.Active} >
                        <Button size='m' variant='transparent'>Входящие звонки</Button>
                    </NavLink>
                    <NavLink to='/profile/edit' activeClassName={s.Active} >
                        <Button size='m' variant='transparent'>Настройки</Button>
                    </NavLink>
                    <div onClick={logOut} className={s.Out} >
                        <Button size='m' variant='transparent' >Выйти</Button>
                    </div>
                </div>
                <div className={s.Content}>
                    <Switch>
                        <Route path='/profile/new' render={() => <NewAd />} />
                        <Route path='/profile/ads' render={() => <MyAds />} />
                        <Route path='/profile/calls' render={() => <Inbox />} />
                        <Route path='/profile/edit' render={
                            () => user && <ProfileEdit userEdit={userEdit} checked={user.checked}
                                        number={user.number} name={user.name}/>
                        } />
                        <Route render={() => <MyAds/>} />
                    </Switch>
                </div>
            </div>
        </Container>
    )
}

const mapStateToProps = ({user}) => {
    return {
        user: user.user,
        isAuth: user.isAuth,
        isLoading: user.isLoading,
    }
}


export default compose(
    connect(mapStateToProps, {setModal, userEdit, userLogout}),
    withRouter
)(Profile)
