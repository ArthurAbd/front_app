import React from 'react'
import s from './Profile.module.sass'
import {withRouter, NavLink} from "react-router-dom";
import Container from '../../common/Container/Container';
import { compose } from 'redux';
import { connect } from 'react-redux';
import {
    setModal, userEdit, userLogout, getInCalls,
    getMyAds, clearInCalls, clearMyAds, updateInCallRating,
    removeAd, changeMapCoord, changePhotos, createAd
} from './../../../actions'
import NavMenu from './NavMenu'
import Content from './Content'


const Profile = ({
    userLogout,
    setModal,
    isAuth,
    history,
    ...props
}) => {
    
    const logOut = () => {
        history.push('/')
        userLogout()
    }

    if (!isAuth) {
        setModal('login')
        history.push('/')
        return null
    }

    return (
        <Container>
            <div className={s.Profile}>
                <NavMenu logOut={logOut} />
                <Content {...props} />
            </div>
        </Container>
    )
}

const mapStateToProps = ({user}) => {
    
    return {
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
    withRouter,
    connect(mapStateToProps, {
        setModal, userEdit, userLogout, getInCalls,
        getMyAds, clearInCalls, clearMyAds, updateInCallRating,
        removeAd, changeMapCoord, changePhotos, createAd
    })
)(Profile)
