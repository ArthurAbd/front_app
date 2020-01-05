import React from 'react'
import {connect} from 'react-redux'
import {withApiConsumer} from '../../HOC/withApiConsumer'
import Spinner from '../../common/Spinner/Spinner'
import { 
    userEdit,
    userReg,
    userLogin
} from '../../../actions/user'
import s from './User.module.sass'


class User extends React.Component {

    componentDidMount() {}

    componentDidUpdate(prevProps) {}

    render() {

        const {
            textModal,
            userEdit,
            userReg,
            userLogin
        } = this.props

        return (
            <React.Fragment>
                <this.props.children 
                    textModal={textModal}
                    userEdit={userEdit}
                    userReg={userReg}
                    userLogin={userLogin}
                    // textModal={textModal}
                />
            </React.Fragment>
        )
    }
}

const mapStateToProps = ({user}) => {
    return {textModal: user.textModal}
}

const mapDispatchToProps = (dispatch, ownProps) => {
    const {api} = ownProps
    return {
        userEdit: userEdit(api, dispatch),
        userReg: userReg(api, dispatch),
        userLogin: userLogin(api, dispatch),
    }
}

export default withApiConsumer()(connect(mapStateToProps, mapDispatchToProps)(User))