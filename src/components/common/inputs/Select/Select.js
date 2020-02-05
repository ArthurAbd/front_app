import React from 'react'

const Select = (props) => {

    const {options = [], ...rest} = props
    
    return (
        <select {...rest} className='input' >
            {options.map((item) => (
                <option value={item}>{item}</option>
            ))}
        </select>
    )
}

export default Select