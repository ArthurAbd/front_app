import React from 'react'
import s from './Profile.module.sass'
import { Route, Switch } from 'react-router-dom';
import ProfileEdit from './ProfileEdit/ProfileEdit';
import NewAd from './NewAd/NewAd';
import MyAds from './MyAds/MyAds';
import Inbox from './Inbox/Inbox';



const Content = (props) => {

    const {
        createAd,
        changePhotos,
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
        userEdit,
        user
    } = props

    return (
        <div className={s.Content}>
            <Switch>
                <Route path='/profile/new' render={
                    () => <NewAd cities={cities} city={city} changePhotos={changePhotos}
                        changeMapCoord={changeMapCoord} 
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
    )
}



export default Content
