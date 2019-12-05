import React from 'react'
import s from './Spinner.module.sass'

const Spinner = () => {
    return (
        <div className={s.Spinner}>
            <i className="fa fa-cog fa-spin" aria-hidden="true"></i>
        </div>
    )
}

export default Spinner