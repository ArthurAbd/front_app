import React from 'react'
import s from './FormField.module.sass'

const FormField = (props) => {
    const {children, label} = props
    return (
        <label className={s.FormField} >
            <span>{label}</span>
            {children}
        </label>
    )
}

export default FormField