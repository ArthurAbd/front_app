import React from 'react'
import s from './CheckBox.module.sass'

const CheckBox = ({label, ...props}) => {

    const [checked, setChecked] = React.useState(false)
    const [focus, setFocus] = React.useState(false)

    const toggleBox = (e) => {
        setFocus(true)
        if (e.target.type === 'checkbox') {
            setChecked(e.target.checked)
        }
    }

    return (
        <label className={s.CheckBox}
            onClick={toggleBox}
            onBlur={() => setFocus(false)}>

            <input {...props} type='checkbox' checked={checked} />

            <div className={`input ${focus ? s.Focus : null}`}>
                {checked ? <span></span> : null}
            </div>

            <span>{label}</span>
        </label>
    )
}

export default CheckBox