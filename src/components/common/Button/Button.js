import React from 'react'
import classNames from 'classnames';
import s from './Button.module.sass'


const Button = ({variant,
                size,
                active = false,
                children,
                ...props
            }) => {    

    const classes = classNames(
        s.Button,
        active && s.active,
        size && s[`button-${size}`],
        variant && s[`button-${variant}`],
    )

    return (
        <button {...props} 
            className={classes} >
            {children && children}
        </button>
    )
}

export default Button