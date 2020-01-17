import React from 'react'
import {connect} from 'react-redux'
import Spinner from '../../common/Spinner/Spinner'
import { 
    // userEdit,
    // userReg,
    userLogin
} from '../../../actions/user'
import { compose } from 'redux'
// import s from './User.module.sass'


class User extends React.Component {

    render() {

        const {
            isAuth,
            isLoading,
            // userEdit,
            // userReg,
            userLogin
        } = this.props
        
        return (
            <React.Fragment>
                {!isLoading ? (<this.props.children 
                    isAuth={isAuth}
                    // userEdit={userEdit}
                    // userReg={userReg}
                    userLogin={userLogin}
                />) :
                (<Spinner />)}
            </React.Fragment>
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
    connect(mapStateToProps, {userLogin})
)(User)