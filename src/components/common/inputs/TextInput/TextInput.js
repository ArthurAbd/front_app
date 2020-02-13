import React from 'react'
import classNames from 'classnames'
import s from './TextInput.module.sass'

const TextInput = ({input, meta, ...props}) => {
    if (!input) return <><input className={s.Input} type='text' {...props} /></>

    const hasError = meta.touched && meta.error
    const hasSuccess = meta.touched && !meta.error

    const classes = classNames(
        s.Input,
        hasError && s.error,
        hasSuccess && s.success
    )

    return (
        <>
            <input className={classes} type='text' {...input} {...props} />

            {hasError && <div className={s.formMessage} >{meta.error}</div>}
        </>
    )
}

export default TextInput