import React from 'react'
import s from './Layout.module.sass'
import Header from '../Header/Header'

const Layout = (props) => {
    return (
        <div className={s.Layout}>
            <Header />
            {props.children}
        </div>
    )
}

export default Layout