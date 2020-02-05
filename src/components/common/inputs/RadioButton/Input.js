import React from 'react'
import s from './Input.module.sass'

const Input = (props) => {
    return (
        <input {...props} className={s.Input} />
    )
}

export default Input