import React from 'react'
import { reduxForm, Field } from 'redux-form'
import TextInput from '../../inputs/TextInput/TextInput'
import FormField from '../../inputs/FormField/FormField'
import { required, phoneNumber, minLength, maxLength} from '../../../../services/validators'
import Button from '../../Button/Button'
import s from './ModalReg.module.sass'

const minLength6 = minLength(6)
const minLength3 = minLength(3)
const maxLength30 = maxLength(30)

const ModalRegForm = ({handleSubmit, error}) => {

    return (
        <form onSubmit={handleSubmit}>
            <FormField label={<i className='fa fa-user fa-2x' aria-hidden='true'/>}>
                <Field
                    placeholder='Имя'
                    name='name'
                    type='text'
                    component={TextInput}
                    validate={[required, minLength3, maxLength30]}
                />
            </FormField>
            <FormField label={<i className='fa fa-phone fa-2x' aria-hidden='true'/>}>
                <Field
                    placeholder='Телефон'
                    name='number'
                    type='tel'
                    component={TextInput}
                    validate={[required, phoneNumber]}
                />
            </FormField>
            <FormField label={<i className='fa fa-lock fa-2x' aria-hidden='true'/>}>
                <Field
                    placeholder='Пароль'
                    name='password' 
                    type='password'
                    component={TextInput}
                    validate={[required, minLength6, maxLength30]}
                    />
            </FormField>

            {error && <div className={s.Error}>
                {error}
            </div>}

            <Button type='submit' size='m'>
                Отправить
            </Button>
        </form>
    )
}


const ModalRegReduxForm = reduxForm({
    form: 'reg'
})(ModalRegForm)

const ModalReg = ({userReg}) => {
    
    return (
        <>
            <div>
                <h3>Регистрация</h3>
            </div>
            <ModalRegReduxForm onSubmit={userReg} />
        </>
    )
}

export default ModalReg