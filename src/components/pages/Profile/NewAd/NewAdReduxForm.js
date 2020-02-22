import React from 'react'
import { reduxForm, Field } from 'redux-form'
import { required, minLength, maxLength, number} from '../../../../services/validators'
import Button from '../../../common/Button/Button'
import FormField from '../../../common/inputs/FormField/FormField'
import TextInput from '../../../common/inputs/TextInput/TextInput'
import { YMaps, Map, Placemark } from 'react-yandex-maps';
import Select from '../../../common/inputs/Select/Select'
import TextArea from '../../../common/inputs/TextArea/TextArea'
import FileInput from '../../../common/inputs/FileInput/FileInput'
import Spinner from '../../../common/Spinner/Spinner'
import s from './NewAdReduxForm.module.sass'


const minLength6 = minLength(6)
const minLength100 = minLength(100)

const maxLength150 = maxLength(150)


const NewAdForm = ({handleSubmit, cities, changeMapCoord, changePhotos}) => {

    const mapRef = React.useRef(null)

    const [mapLoad, setMapLoad] = React.useState(true)

    const setEventListener = () => {
        setMapLoad(false)
        mapRef.current.events
        .add('boundschange', function (e) {
            changeMapCoord(e.get('newCenter'))
        }) 
    }

    const types = [
        {tag: 'r', name: 'Комната'},
        {tag: 'st', name: 'Студия'},
        {tag: '1k', name: 'Однокомнатная квартира'},
        {tag: '2k', name: 'Двухкомнатная квартира'},
        {tag: '3k', name: 'Трехкомнатная квартира'},
        {tag: '4k+', name: 'Квартира 4 и более комнат'}
    ]

    const map = (
        <div style={{position: 'relative'}} >
            <YMaps query={{
                apikey: 'd6a15e01-7431-4971-aa3e-c04c1ed41014',
            }}>
                <Map
                    width={'100%'}
                    height={'400px'}
                    defaultState={{center: [55.75, 37.6], zoom: 12}}
                    onLoad={() => setEventListener()}
                    instanceRef={mapRef}
                >
                </Map>
            </YMaps>
                {!mapLoad && <div style={{position: 'absolute', top: '50%', right: '50%',
                    marginTop: '-5px', marginLeft: '-10px',}} >
                    <i className="fa fa-map-marker fa-2x" aria-hidden="true"></i>
                </div>}
        </div>
      )

    return (
        <form onSubmit={handleSubmit}>

            <div className={s.Address}>
                <h2>Адрес</h2>
                <div className={s.City} >
                    <FormField label='Город:' >
                        <Field
                            name='city'
                            type='text'
                            component={Select}
                            options={cities}
                            validate={[required]}
                        />
                    </FormField>
                </div>
                <div>
                    <FormField label='Адрес:' >
                        <Field
                            disabled
                            placeholder='Двигайте карту, чтобы изменить адрес'
                            name='address'
                            type='text'
                            component={TextInput}
                            validate={[required, minLength6, maxLength150]}
                        />
                    </FormField>
                </div>
                <Field
                    name='coordX'
                    type='hidden'
                    component={TextInput}
                    validate={[required, number]}
                />
                <Field
                    name='coordY'
                    type='hidden'
                    component={TextInput}
                    validate={[required, number]}
                />
                <div>
                    {mapLoad && <Spinner />}
                    {map}
                </div>
            </div>
            
            <div className={s.Spec}>
                <h2>Характеристики</h2>
                <div>
                    <FormField label='Тип:' >
                        <Field
                            name='type'
                            type='text'
                            component={Select}
                            options={types}
                            validate={[required]}
                        />
                    </FormField>
                </div>
                <div>
                    <FormField label='Площадь:' >
                        <Field
                            name='area'
                            type='text'
                            component={TextInput}
                            validate={[required, number]}
                        />
                    </FormField>
                </div>
                <div>
                    <FormField label='Этаж:' >
                        <Field
                            name='floor'
                            type='text'
                            component={TextInput}
                            validate={[required, number]}
                        />
                    </FormField>
                </div>
                <div>
                    <FormField label='Этажей в доме:' >
                        <Field
                            name='floors'
                            type='text'
                            component={TextInput}
                            validate={[required, number]}
                        />
                    </FormField>
                </div>
            </div>

            <div className={s.Descr} >
                <h2>Описание</h2>
                <div className={s.Text} >
                    <FormField>
                        <Field
                            name='text'
                            type='text'
                            component={TextArea}
                            validate={[required, minLength100]}
                        />
                    </FormField>
                </div>
                <div className={s.Price}>
                    <FormField label='Цена в месяц:' >
                        <Field
                            name='price'
                            type='text'
                            component={TextInput}
                            validate={[required, number]}
                        />
                    </FormField>
                </div>
            </div>
            
            <div className={s.Photos}>
                <h2>Фотографии</h2>
                <div className={s.FileInput} >
                    <Field
                        name='photos'
                        type='hidden'
                        component={TextInput}
                        validate={[required]}
                    />
                    <FileInput changePhotos={changePhotos} />
                </div>
            </div>
            <Button type='submit' size='m'>
                Опубликовать
            </Button>
        </form>
    )
}

const NewAdReduxForm = reduxForm({
    form: 'newAd',
})(NewAdForm)


export default NewAdReduxForm