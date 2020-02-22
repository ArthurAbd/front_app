import React from 'react'
import s from './Footer.module.sass'
import { Link } from 'react-router-dom'
import Container from '../common/Container/Container';


const Footer = (props) => {

    const text = 'Lorem ipsum dolor sit amet consectetur adipiscing elit aliquam eget nullam pellentesque aliquam curabitur cociis.'

    return (
        <div className={s.Wrapper}>
            <Container>
                <div className={s.Footer} >
                    <div>
                        <div className={s.Logotype}>
                            <Link to='/'>RentalRoom</Link>
                            <span>{text} </span>
                        </div>
                        <div className={s.Nav}>
                            <span>Навигация </span>
                            <Link to='/'>Подобрать квартиру</Link>
                            <Link to='/'>О сервисе</Link>
                            <Link to='/'>Помощь</Link>
                        </div>
                    </div>
                </div>
            </Container>
        </div>
    )
}

export default Footer