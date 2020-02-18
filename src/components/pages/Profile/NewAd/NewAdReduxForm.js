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



const minLength3 = minLength(3)
const minLength6 = minLength(6)
const minLength100 = minLength(100)

const maxLength30 = maxLength(30)
const maxLength150 = maxLength(150)


const NewAdForm = ({handleSubmit, cities, changeMapCoord, changePhotos}) => {

    const mapRef = React.useRef(null)

    const setEventListener = () => {
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
                    state={{center: [55.75, 37.6], zoom: 12}}
                    onLoad={() => setEventListener()}
                    instanceRef={mapRef}
                >
                </Map>
            </YMaps>
                <div style={{position: 'absolute', top: '50%', right: '50%',
                    marginTop: '-5px', marginLeft: '-10px',}} >
                    <i className="fa fa-map-marker fa-2x" aria-hidden="true"></i>
                </div>
        </div>
      )

    return (
        <form onSubmit={handleSubmit}>
            <FormField label={'Город'}>
                <Field
                    name='city'
                    type='text'
                    component={Select}
                    options={cities}
                    validate={[required]}
                />
            </FormField>

            <FormField label={<i className='fa fa-map fa-2x' aria-hidden='true'/>}>
                <Field
                    name='type'
                    type='text'
                    component={Select}
                    options={types}
                    validate={[required]}
                />
            </FormField>

            <FormField label={<i className='fa fa-map fa-2x' aria-hidden='true'/>}>
                <Field
                    placeholder='Площадь'
                    name='area'
                    type='text'
                    component={TextInput}
                    validate={[required, number]}
                />
            </FormField>

            <FormField label={<i className='fa fa-map fa-2x' aria-hidden='true'/>}>
                <Field
                    placeholder='Этаж'
                    name='floor'
                    type='text'
                    component={TextInput}
                    validate={[required, number]}
                />
            </FormField>

            <FormField label={<i className='fa fa-map fa-2x' aria-hidden='true'/>}>
                <Field
                    placeholder='Этажей в доме'
                    name='floors'
                    type='text'
                    component={TextInput}
                    validate={[required, number]}
                />
            </FormField>

            <FormField label={<i className='fa fa-map fa-2x' aria-hidden='true'/>}>
                <Field
                    placeholder='Адрес'
                    name='address'
                    type='text'
                    component={TextInput}
                    validate={[required, minLength6, maxLength150]}
                />
            </FormField>

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
                {map}
            </div>
            
            <Field
                name='text'
                type='text'
                component={TextArea}
                validate={[required, minLength100]}
            />

            <Field
                placeholder='Цена в месяц'
                name='price'
                type='text'
                component={TextInput}
                validate={[required, number]}
            />

            <Field
                name='photos'
                type='hidden'
                component={TextInput}
                validate={[required]}
            />

            <FileInput changePhotos={changePhotos} />
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