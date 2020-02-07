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
import { compose } from 'redux';
import { connect } from 'react-redux';
import Spinner from '../../../common/Spinner/Spinner';
import {setModal} from '../../../../actions'




class Profile extends React.Component {

    render() {
        let {
            setModal,
            isLoading,
            isAuth,
        } = this.props

isAuth = true

        if (isLoading) return (<Spinner />)
        if (!isAuth) {
            setModal('login')
            this.props.history.push('/')
        }

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
}

const mapStateToProps = ({user}) => {
    return {
        isAuth: user.isAuth,
        isLoading: user.isLoading,
    }
}


export default compose(
    connect(mapStateToProps, {setModal}),
    withRouter
)(Profile)
