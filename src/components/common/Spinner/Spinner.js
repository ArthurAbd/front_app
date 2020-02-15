import React from 'react'
import s from './Spinner.module.sass'
import Logo from '../../../assets/icon/house.svg'

const Spinner = () => {
    return (
        <div className={s.Spinner}>
            <span>
                <img src={Logo} alt='' />
            </span>
        </div>
    )
}

export default Spinner