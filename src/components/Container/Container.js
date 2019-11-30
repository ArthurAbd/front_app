import React from 'react'
import s from './Container.module.sass'

const Container = (props) => {
    return (
        <div className={s.Container}>
            {props.children}
        </div>
    )
}

export default Container