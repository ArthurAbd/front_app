import React from 'react'
import s from './ModalPhone.module.sass'
import Button from '../../Button/Button'

const ModalPhone = ({phoneNumberData, updateOutCallRating}) => {
    
    const mapBtn = [
        {label: 'Посредник', index: -1},
        {label: 'Собственник', index: 1},
        {label: 'Не отвечает', index: 2},
    ]


    return (
        <>
            <div className={s.ModalPhone}>
                <h3>
                    <a href={`tel:+7${phoneNumberData.phoneNumber}`} >
                        <i className="fa fa-phone"></i>
                        +7{phoneNumberData.phoneNumber}
                    </a>
                </h3>
            </div>

            {phoneNumberData.rating === 0 ? (
                <span>Пожалуйста оцените собеседника, это важно для нас.</span>
            ) : (
                <span>Вы уже оценили собеседника, хотите изменить?</span>
            )}
            
            <div className={s.BtnGroup}>
                {mapBtn.map((btn) => (
                    <Button
                        key={btn.index}
                        onClick={() => updateOutCallRating({
                            rating: btn.index,
                            idOutCall: phoneNumberData.idOutCall
                        })}
                        size='m'
                        variant='outline'
                        active={btn.index === phoneNumberData.rating}
                        >
                            {btn.label}
                    </Button>
                ))}
                {/* <Button size='m' variant='outline'>Посредник</Button>
                <Button size='m' variant='outline'>Собственник</Button>
                <Button size='m' variant='outline'>Не отвечает</Button> */}
            </div>
        </>
    )
}

export default ModalPhone