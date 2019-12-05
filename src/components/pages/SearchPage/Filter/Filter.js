import React from 'react'
import s from './Filter.module.sass'

const Filter = (props) => {

    const { minValue,
            maxValue,
            selectValue,
            selectTypeValue,
            setTypeSearch,
            setSortingSearch,
            setMinPriceSearch,
            setMaxPriceSearch
        } = props

        const filterBtnMap = {
            'r': {class: s.Btn, text: 'Комната'},
            'st': {class: s.Btn, text: 'Студия'},
            '1k': {class: s.Btn, text: '1-комнатная'},
            '2k': {class: s.Btn, text: '2-комнатная'},
            '3k': {class: s.Btn, text: '3-комнатная'},
            '4k+': {class: s.Btn, text: '4-х и более'},
        }
        if (selectTypeValue !== null) {
            filterBtnMap[selectTypeValue]['class'] = `${s.Btn} ${s.Active}`
        }

        const filterBtn = Object.keys(filterBtnMap).map((key) => {
            return (
                <div key={key} onClick={() => setTypeSearch(key)}
                    className={filterBtnMap[key]['class']}>
                        {filterBtnMap[key]['text']}
                </div>
            )
        })

    return (
        <div className={s.Filter}>
            <div className={s.FilterButtons}>
                {filterBtn}
            </div>
            <div className={s.FilterPrice}>
                <div>
                    <label htmlFor='min'>От</label>
                    <input 
                        defaultValue={minValue}
                        className={`${s.PriceInput} Input`}
                        type='text'
                        name='min'
                        onBlur={setMinPriceSearch} />
                </div>
                <div>
                    <label htmlFor='max'>До</label>
                    <input
                        defaultValue={maxValue}
                        className={`${s.PriceInput} Input`}
                        type='text'
                        name='max'
                        onBlur={setMaxPriceSearch} />
                </div>
                <div>
                    <label htmlFor='select'>Сортировать</label>
                    <select
                        value={selectValue}
                        className={`${s.Select} Input`}
                        name='select'
                        onChange={setSortingSearch}>
                            
                        <option value='dateDesc'>По дате</option>
                        <option value='priceAsc'>Дешевле</option>
                        <option value='priceDesc'>Дороже</option>
                    </select>
                </div>
            </div>
        </div>
    )
}

export default Filter