import React from 'react'
import s from './Spinner.module.sass'

const Spinner = () => {

    return (
        <div className={s.Spinner}>
            <i className="fa fa-spinner fa-pulse fa-3x fa-fw" aria-hidden="true"></i>
            <span className="sr-only">Загрузка...</span>
        </div>
    )
    
}

export default Spinner