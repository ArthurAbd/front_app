import React from 'react'
import { reduxForm, Field } from 'redux-form'
import TextInput from '../../inputs/TextInput/TextInput'
import FormField from '../../inputs/FormField/FormField'
import { required, phoneNumber} from '../../../../services/validators'

const ModalLoginPhoneForm = ({handleSubmit}) => {
    return (
        <form onSubmit={handleSubmit} >
            <FormField label='Телефон'>
                <Field
                    name='number'
                    type='tel'
                    component={TextInput}
                    validate={[required, phoneNumber]}
                />
            </FormField>
            <button type='submit'>
                Войти
            </button>
        </form>
    )
}

const LoginPhoneReduxForm = reduxForm({
    form: 'loginPhone'
})(ModalLoginPhoneForm)

const ModalLoginPhone = ({userLoginPhone}) => {
    return (
        <>
            <h3>Войти</h3>
            <LoginPhoneReduxForm onSubmit={userLoginPhone} />
        </>
    )
}

export default ModalLoginPhone