import React from 'react'
import s from './ModalLogin.module.sass'
import { reduxForm, Field } from 'redux-form'
import TextInput from '../../inputs/TextInput/TextInput'
import FormField from '../../inputs/FormField/FormField'
import Button from '../../Button/Button'
import { required, phoneNumber, minLength, maxLength} from '../../../../services/validators'

const minLength6 = minLength(6)
const maxLength30 = maxLength(30)

const LoginForm = ({handleSubmit, error}) => {
    return (
        <form onSubmit={handleSubmit}>
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
                ВОЙТИ
            </Button>
        </form>
    )
}


const LoginReduxForm = reduxForm({
    form: 'login'
})(LoginForm)


const ModalLogin = ({userLogin, setModal}) => {
    return (
        <>
            <div>
                <h3>Войти</h3>
            </div>
            <LoginReduxForm onSubmit={userLogin} />
            <div className={s.Footer}>
                <span>Нет аккаунта?</span>
                <Button size='m'
                    variant='outline'
                    onClick={() => setModal('reg')}
                    >Создать</Button>
            </div>
                
        </>
    )
}

export default ModalLogin