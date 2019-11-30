import React from 'react'
import {ApiConsumer} from '../common/ApiContext/ApiContext'

const withApiConsumer = () => (Wrapped) => {
    
    return (props) => {
        return (
            <ApiConsumer>
                {
                    (api) => {
                        return (<Wrapped {...props} api={api} />)
                    }
                }
            </ApiConsumer> 
        )
    }
}

export {withApiConsumer}