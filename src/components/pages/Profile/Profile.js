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
import {
    setModal, userEdit, userLogout, getInCalls,
    getMyAds, clearInCalls, clearMyAds, updateInCallRating,
    removeAd, changeMapCoord, changePhotos, createAd
} from './../../../actions'
import Button from '../../common/Button/Button';


const Profile = (props) => {

    const {
        createAd,
        changePhotos,
        photos,
        changeMapCoord,
        cities,
        city,
        updateInCallRating,
        removeAd,
        clearInCalls,
        clearMyAds,
        getInCalls,
        getMyAds,
        inCalls,
        myAds,
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
                    <div className={s.Sticky}>
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
                </div>
                <div className={s.Content}>
                    <Switch>
                        <Route path='/profile/new' render={
                            () => <NewAd cities={cities} city={city} changePhotos={changePhotos}
                                changeMapCoord={changeMapCoord} photos={photos} 
                                createAd={createAd} />
                        } />
                        <Route path='/profile/ads' render={
                            () => <MyAds myAds={myAds} removeAd={removeAd}
                                getMyAds={getMyAds} clearMyAds={clearMyAds} />
                        } />
                        <Route path='/profile/calls' render={
                            () => <Inbox inCalls={inCalls} updateInCallRating={updateInCallRating}
                                getInCalls={getInCalls} clearInCalls={clearInCalls} />
                        } />
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

const mapStateToProps = ({user, fileInput}) => {
    
    return {
        photos: fileInput.photos,
        cities: user.cities,
        city: user.city,
        inCalls: user.inCalls,
        myAds: user.myAds,
        user: user.user,
        isAuth: user.isAuth,
        isLoading: user.isLoading,
    }
}


export default compose(
    connect(mapStateToProps, {
        setModal, userEdit, userLogout, getInCalls,
        getMyAds, clearInCalls, clearMyAds, updateInCallRating,
        removeAd, changeMapCoord, changePhotos, createAd
    }),
    withRouter
)(Profile)
