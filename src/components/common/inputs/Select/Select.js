import React from 'react'
import s from './Select.module.sass'

const Select = (props) => {

    const {children, options = [], ...rest} = props
    
    return (
        <select {...rest} className={s.Select} >
            {options.map((item) => (
                <option value={item}>{item}</option>
            ))}
            {children}
        </select>
    )
}

export default Select