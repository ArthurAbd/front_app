import React from 'react'
import { reduxForm, Field } from 'redux-form'
import { required, minLength, maxLength, number} from '../../../../services/validators'
import Button from '../../../common/Button/Button'
import FormField from '../../../common/inputs/FormField/FormField'
import TextInput from '../../../common/inputs/TextInput/TextInput'
import Select from '../../../common/inputs/Select/Select'
import TextArea from '../../../common/inputs/TextArea/TextArea'
import FileInput from '../../../common/inputs/FileInput/FileInput'
import s from './NewAdReduxForm.module.sass'
import Map from './Map'


const minLength6 = minLength(6)
const minLength100 = minLength(100)
const maxLength150 = maxLength(150)


const NewAdForm = ({handleSubmit, cities, changeMapCoord, changePhotos}) => {

    const types = [
        {tag: 'r', name: 'Комната'},
        {tag: 'st', name: 'Студия'},
        {tag: '1k', name: 'Однокомнатная квартира'},
        {tag: '2k', name: 'Двухкомнатная квартира'},
        {tag: '3k', name: 'Трехкомнатная квартира'},
        {tag: '4k+', name: 'Квартира 4 и более комнат'}
    ]

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
                            placeholder='Поставьте точку на карте, чтобы изменить адрес'
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
                    <Map changeMapCoord={changeMapCoord} />
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
                        name='photosSmall'
                        type='hidden'
                        component={TextInput}
                        validate={[required]}
                    />
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