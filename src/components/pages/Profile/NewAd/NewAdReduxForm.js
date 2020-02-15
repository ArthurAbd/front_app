import React from 'react'
import { reduxForm, Field } from 'redux-form'
import { required, minLength, maxLength} from '../../../../services/validators'
import Button from '../../../common/Button/Button'
import FormField from '../../../common/inputs/FormField/FormField'
import TextInput from '../../../common/inputs/TextInput/TextInput'


const minLength6 = minLength(6)
const minLength3 = minLength(3)
const maxLength30 = maxLength(30)

const NewAdForm = ({handleSubmit, map}) => {

    return (
        <form onSubmit={handleSubmit}>
            <FormField label={<i className='fa fa-map fa-2x' aria-hidden='true'/>}>
                <Field
                    placeholder='Адрес'
                    name='address'
                    type='text'
                    component={TextInput}
                    validate={[required, minLength3, maxLength30]}
                />
            </FormField>
            <FormField label={<i className='fa fa-map fa-2x' aria-hidden='true'/>}>
                <Field
                    placeholder='Адрес'
                    name='address'
                    type='text'
                    component={'textarea'}
                    validate={[required, minLength3, maxLength30]}
                />
            </FormField>
            <div>
                {map}
            </div>
            <Button type='submit' size='m'>
                Изменить имя
            </Button>
        </form>
    )
}

const NewAdReduxForm = reduxForm({
    form: 'newAd',
})(NewAdForm)


export default NewAdReduxForm