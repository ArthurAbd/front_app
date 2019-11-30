import React from 'react'
import s from './Layout.module.sass'

const Layout = (props) => {
    return (
        <div className={s.Layout}>
            {props.children}
        </div>
    )
}

export default Layout