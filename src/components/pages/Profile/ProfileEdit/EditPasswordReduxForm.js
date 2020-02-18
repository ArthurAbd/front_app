import React from 'react'
import { reduxForm, Field } from 'redux-form'
import { required, minLength, maxLength, matchInput} from '../../../../services/validators'
import Button from '../../../common/Button/Button'
import FormField from '../../../common/inputs/FormField/FormField'
import TextInput from '../../../common/inputs/TextInput/TextInput'


const minLength6 = minLength(6)
const maxLength30 = maxLength(30)

const EditPasswordForm = ({handleSubmit}) => {

    return (
        <form onSubmit={handleSubmit}>
            <FormField label={<i className='fa fa-lock fa-2x' aria-hidden='true'/>}>
                <Field
                    placeholder='Текущий пароль'
                    name='password' 
                    type='password'
                    component={TextInput}
                    validate={[required, minLength6, maxLength30]}
                    />
            </FormField>
            <FormField label={<i className='fa fa-lock fa-2x' aria-hidden='true'/>}>
                <Field
                    placeholder='Новый пароль'
                    name='newPassword' 
                    type='password'
                    component={TextInput}
                    validate={[required, minLength6, maxLength30]}
                    />
            </FormField>
            <FormField label={<i className='fa fa-lock fa-2x' aria-hidden='true'/>}>
                <Field
                    placeholder='Повторите пароль'
                    name='repeatPassword' 
                    type='password'
                    component={TextInput}
                    validate={[required, minLength6, maxLength30, matchInput]}
                    />
            </FormField>
            <Button type='submit' size='s' >
                Изменить пароль
            </Button>
        </form>
    )
}

const EditPasswordReduxForm = reduxForm({
    form: 'editPassword'
})(EditPasswordForm)


export default EditPasswordReduxForm