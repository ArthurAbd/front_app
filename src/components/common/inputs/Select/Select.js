import React from 'react'
import s from './Select.module.sass'

const Select = (props) => {

    const {children, input, options = [], ...rest} = props
    
    return (
        <select {...rest} {...input} className={s.Select} >
            {options.map((item) => (
                <option key={item.tag} value={item.tag}>{item.name}</option>
            ))}
            {children}
        </select>
    )
}

export default Select