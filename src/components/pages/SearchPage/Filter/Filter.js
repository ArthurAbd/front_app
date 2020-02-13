import React from 'react'
import s from './Filter.module.sass'
import Button from '../../../common/Button/Button'
import TextInput from '../../../common/inputs/TextInput/TextInput'

const Filter = (props) => {

    const { minValue,
            maxValue,
            selectTypeValue,
            setTypeSearch,
            setMinPriceSearch,
            setMaxPriceSearch
        } = props

        const filterBtnMap = {
            'r': 'Комната',
            'st': 'Студия',
            '1k': '1',
            '2k': '2',
            '3k': '3',
            '4k+': '4+',
        }

        const filterBtn = Object.keys(filterBtnMap).map((key) => {
            return (
                <Button key={key} onClick={() => setTypeSearch(key)}
                    size='m'
                    variant = 'outline'
                    active={selectTypeValue === key}>
                        {filterBtnMap[key]}
                </Button>
            )
        })

    return (
        <div className={s.Filter}>
            <div className={s.BtnGroup}>
                <span>Кол-во комнат</span>
                <div>
                    {filterBtn}
                </div>
            </div>
            <div className={s.PriceInput}>
                <span>Цена от</span>
                <div>
                    <TextInput
                        defaultValue={minValue}
                        placeholder='Введите цену'
                        onBlur={setMinPriceSearch}
                    />
                </div>
            </div>
            <div className={s.PriceInput}>
                <span>Цена до</span>
                <div>
                    <TextInput
                        defaultValue={maxValue}
                        placeholder='Введите цену'
                        onBlur={setMaxPriceSearch}
                    />
                </div>
            </div>
        </div>
    )
}

export default Filter