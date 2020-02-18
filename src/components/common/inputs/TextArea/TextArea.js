import React from 'react'
import classNames from 'classnames'
import s from './TextArea.module.sass'

const TextArea = ({input, meta, ...props}) => {
    
    if (!input) return <><textarea className={s.TextArea} type='text' {...props} /></>

    const hasError = meta.touched && meta.error
    const hasSuccess = meta.touched && !meta.error

    const classes = classNames(
        s.TextArea,
        hasError && s.error,
        hasSuccess && s.success
    )

    return (
        <>
            <textarea className={classes} type='text' {...input} {...props} />

            {hasError && <div className={s.formMessage} >{meta.error}</div>}
        </>
    )
}

export default TextArea