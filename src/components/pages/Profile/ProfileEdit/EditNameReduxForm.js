import React from 'react'
import { reduxForm, Field } from 'redux-form'
import { required, minLength, maxLength} from '../../../../services/validators'
import Button from '../../../common/Button/Button'
import FormField from '../../../common/inputs/FormField/FormField'
import TextInput from '../../../common/inputs/TextInput/TextInput'


const minLength6 = minLength(6)
const minLength3 = minLength(3)
const maxLength30 = maxLength(30)

const EditNameForm = ({handleSubmit}) => {

    return (
        <form onSubmit={handleSubmit}>
            <FormField label={<i className='fa fa-user fa-2x' aria-hidden='true'/>}>
                <Field
                    placeholder='Новое имя'
                    name='name'
                    type='text'
                    component={TextInput}
                    validate={[required, minLength3, maxLength30]}
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
            <Button type='submit' size='s'>
                Изменить имя
            </Button>
        </form>
    )
}

const EditNameReduxForm = reduxForm({
    form: 'editName',
})(EditNameForm)


export default EditNameReduxForm