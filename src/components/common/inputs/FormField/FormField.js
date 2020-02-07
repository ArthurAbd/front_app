import React from 'react'
import s from './FormField.module.sass'

const FormField = ({children, label}) => {
    return (
        <label className={s.FormField} >
            <span>{label}</span>
            {children}
        </label>
    )
}

export default FormField