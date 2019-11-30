import React from 'react'
import s from './Filter.module.sass'

const Filter = (props) => {
    return (
        <div className={s.Filter}>
            <div className={s.Filter}>
                <div className={s.FilterButtons}>
                    <div className={s.Btn}>Комната</div>
                    <div className={s.Btn}>Студия</div>
                    <div className={s.Btn}>1к</div>
                    <div className={s.Btn}>2к</div>
                    <div className={s.Btn}>3к</div>
                    <div className={s.Btn}>4к+</div>
                </div>
                <div className={s.FilterPrice}>
                    <div>
                        <label for='min'>От</label>
                        <input className={`${s.PriceInput} Input`} type='text' name='min' /></div>
                    <div>
                        <label for='max'>До</label>
                        <input className={`${s.PriceInput} Input`} type='text' name='max' /></div>
                    <div>
                        <label for='select'>Сортировать</label>
                        <select className={`${s.Select} Input`} name='select'>
                            <option>По дате</option>
                            <option>Дешевле</option>
                            <option>Дороже</option>
                        </select>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Filter