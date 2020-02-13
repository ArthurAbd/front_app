import React from 'react'
import classNames from 'classnames'
import s from './CheckBox.module.sass'

const CheckBox = ({label, ...props}) => {

    const [checked, setChecked] = React.useState(false)

    const toggleBox = (e) => {
        if (e.target.type === 'checkbox') {
            setChecked(e.target.checked)
        }
    }

    return (
        <label className={s.CheckBox}
            onClick={toggleBox}
            >

            <input {...props} type='checkbox' checked={checked} />

            <div className={classNames(`${s.Input} ${checked && s.checked}`)}>
                {checked && <i class="fa fa-check" aria-hidden="true"></i>}
            </div>

            <span>{label}</span>
        </label>
    )
}

export default CheckBox