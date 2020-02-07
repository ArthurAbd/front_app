import React from 'react'
import { reduxForm, Field } from 'redux-form'
import TextInput from '../../inputs/TextInput/TextInput'
import FormField from '../../inputs/FormField/FormField'
import { required, phoneNumber, minLength, maxLength} from '../../../../services/validators'

const minLength6 = minLength(6)
const minLength3 = minLength(3)
const maxLength30 = maxLength(30)

const ModalRegForm = ({handleSubmit}) => {

    return (
        <form onSubmit={handleSubmit}>
            <FormField label='Имя'>
                <Field
                    name='name'
                    type='text'
                    component={TextInput}
                    validate={[required, minLength3, maxLength30]}
                />
            </FormField>
            <FormField label='Телефон'>
                <Field
                    name='number'
                    type='tel'
                    component={TextInput}
                    validate={[required, phoneNumber]}
                />
            </FormField>
            <FormField label='Пароль'>
                <Field
                    name='password' 
                    type='password'
                    component={TextInput}
                    validate={[required, minLength6, maxLength30]}
                    />
            </FormField>
            <button type='submit'>
                Отправить
            </button>
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