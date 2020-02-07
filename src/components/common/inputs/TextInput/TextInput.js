import React from 'react'
import s from './TextInput.module.sass'

const TextInput = ({input, meta, ...props}) => {
    const hasError = meta.touched && meta.error
    return (
        <div className={s.TextInput}>
            <input type='text' {...input} {...props} />
            {hasError ?
                <div className='formMessage' >{meta.error}</div> : null }
                
        </div>
    )
}

export default TextInput