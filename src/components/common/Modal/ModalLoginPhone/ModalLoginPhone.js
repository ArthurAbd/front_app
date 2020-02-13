import React from 'react'
import { reduxForm, Field } from 'redux-form'
import TextInput from '../../inputs/TextInput/TextInput'
import FormField from '../../inputs/FormField/FormField'
import { required, phoneNumber} from '../../../../services/validators'

const ModalLoginPhoneForm = ({handleSubmit}) => {
    return (
        <form onSubmit={handleSubmit} >
            <FormField label={<i className='fa fa-phone fa-2x' aria-hidden='true'/>}>
                <Field
                    placeholder='Телефон'
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

const ModalLoginPhone = ({userLoginPhone, userMessage}) => {
    return (
        <>
            <h3>Войти</h3>
            {userMessage && <span>{userMessage}</span>}
            <LoginPhoneReduxForm onSubmit={userLoginPhone} />
        </>
    )
}

export default ModalLoginPhone