import React from 'react'
import s from './NewAd.module.sass'
import * as GMap from 'pigeon-maps'


const NewAd = (props) => {

    const map = (
        <GMap 
            center={[50, 35]}
            zoom={12}
            height={400}
            touchEvents={false}
            mouseEvents={false}
        >
            <div className={s.Marker}>
                <i class="fa fa-map-marker" aria-hidden="true"></i>
            </div>
        </GMap>
      )

    return (
        <div className={s.NewAd}>
            <form id='NewAd'>
                <div>
                    <label htmlFor='name'>Имя</label>
                    <input type='text' id="name" />
                </div>
                <div>
                    <label htmlFor='tel'>Телефон</label>
                    <input type='tel' id="tel" value='+79534037733' disabled />
                </div>
                <div>
                    <label htmlFor='adress'>Адрес</label>
                    <input type='text' id="address" />
                </div>
                <div className={s.Map}>
                    {map}
                </div>
                <div>
                    <label htmlFor='textarea'>Описание</label>
                    <textarea form='NewAd' id="textarea" rows='10' />
                </div>
                <div>
                    <label htmlFor='photos'>Описание</label>
                    <input type='file' multiple id="photos" />
                </div>
                <div className={s.BtnGroup}>
                    <button type='submit' className={s.Btn}>
                        Опубликовать
                    </button>
                </div>
            </form>
        </div>
    )
}


export default NewAd