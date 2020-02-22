import React from 'react'
import s from './Spinner.module.sass'
import Logo from '../../../assets/icon/house.svg'

const Spinner = ({full, small}) => {

    if (full) {
        return (
            <div className={s.SpinnerFull}>
                <span>
                    <img src={Logo} alt='' />
                </span>
            </div>
        )
    }

    if (small) {
        return (
            <div className={s.SpinnerSmall}>
                <i class="fa fa-spinner fa-pulse fa-1x fa-fw" aria-hidden="true"></i>
            <span class="sr-only">Загрузка...</span>
        </div>
        )
    }

    return (
        <div className={s.Spinner}>
            <i class="fa fa-spinner fa-pulse fa-3x fa-fw" aria-hidden="true"></i>
            <span class="sr-only">Загрузка...</span>
        </div>
    )
    
}

export default Spinner