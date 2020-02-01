import React from 'react'
import TextInput from '../common/inputs/TextInput/TextInput'
import Select from '../common/inputs/Select/Select'
import FormField from '../common/inputs/FormField/FormField'
import TextArea from '../common/inputs/TextArea/TextArea'
import CheckBox from '../common/inputs/CheckBox/CheckBox'

const UI = (props) => {
    return (
        <div style={{margin: '50px', width: '400px',
                display: 'flex', flexDirection: 'column'}}>
            <FormField label='Имя' >
                <TextInput value='Артур' />
            </FormField>
            <br/>
            <TextInput value='Артур' />
            <br/>
            <Select options={['small', 'medium', 'large']} />
            <br/>
            <TextArea />
            <br/>
            <CheckBox label='Interested' />
        </div>
    )
}

export default UI