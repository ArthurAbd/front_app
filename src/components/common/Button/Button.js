import React from 'react'
import s from './Button.module.sass'

const Button = ({label, primary, active, ...props}) => {    
    return (
        <button {...props} 
            className={`
                ${s.Button}
                ${primary ? s.Primary:''}
                ${active ? s.Active:''}
            `} >
            {label}
        </button>
    )
}

export default Button