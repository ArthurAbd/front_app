import React from 'react'
import { reduxForm, Field } from 'redux-form'
import TextInput from '../../inputs/TextInput/TextInput'
import FormField from '../../inputs/FormField/FormField'
import { required, phoneNumber, minLength, maxLength} from '../../../../services/validators'

const minLength6 = minLength(6)
const maxLength30 = maxLength(30)

const LoginForm = ({handleSubmit}) => {

    return (
        <form onSubmit={handleSubmit}>
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
                Войти
            </button>
        </form>
    )
}


const LoginReduxForm = reduxForm({
    form: 'login'
})(LoginForm)


const ModalLogin = ({userLogin}) => {
    return (
        <>
            <div>
                <h3>Войти</h3>
            </div>
            <LoginReduxForm onSubmit={userLogin} />
        </>
    )
}

export default ModalLogin